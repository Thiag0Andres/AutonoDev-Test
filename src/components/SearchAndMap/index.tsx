/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//Dom
import { Link } from "react-router-dom";

//Bootstrap
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

//data
import dataJSON from "../../data/neighborhoods.json";

//Redux e Auth
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { removeUser } from "../../store/ducks/user/actions";
import { isAuthenticated } from "../../services/auth";

//Types
import { User } from "../../store/ducks/user/types";

//leaflet
import { Map, TileLayer, Marker } from "react-leaflet";

//Components
import MessageModal from "../Modal/MessageModal";
import LoginModal from "../Modal/LoginModal";

//Message
import { useSnackbar } from "notistack";

//Icons
import { AiFillCaretDown } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

//Images
import Waiting from "../../images/Waiting.svg";

import "./styles.scss";

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  location: [number, number];
}

const SearchAndMap: React.FC = () => {
  //Estados
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    -7.1215022,
    -34.8814724,
  ]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [zone, setZone] = useState(0);
  const [show, setShow] = useState(false);
  const [showNeighborhood, setShowNeighborhoods] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [ModalChoice, setModalChoice] = useState(false);
  const [choice, setChoice] = useState<string>("");
  const [neighborhoodId, setNeighborhoodId] = useState(0);

  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  const { enqueueSnackbar } = useSnackbar();

  const data = dataJSON.neighborhoods;

  //De acordo com a zona selecionada seta o array de bairros
  const searchZone = () => {
    // eslint-disable-next-line array-callback-return
    data.map((item: Neighborhoods) => {
      if (item.zone === zone) {
        setNeighborhoods(item.neighborhood);
      } else if (0 === zone) {
        setNeighborhoods([]);
      }
    });
  };

  //Toda vez que for selecionada uma zona diferente, executa a função acima
  useEffect(() => {
    searchZone();
  }, [zone]);

  //Troca de telas interativas
  const handleSelect = () => {
    setShowNeighborhoods(true);
    setShowWaiting(false);
  };

  //Troca de modal com o nome do bairro
  const handleModalChoice = (neighborhood: string) => {
    setModalChoice(true);
    setChoice(neighborhood);
  };

  //Sair do modal
  const handleClose = () => {
    setModalChoice(false);
  };

  // Atualiza o estado de autenticação na mudança de usuário
  useEffect(() => {
    const response = isAuthenticated();
    setIsLogged(response);
  }, [user]);

  //Logout do usuário
  const logout = () => {
    enqueueSnackbar("Usuário deslogado com sucesso!", { variant: "info" });
    dispatch(removeUser());
  };

  return (
    <div id="page-search-map">
      <header className="header">
        <Link to="/">
          <FiArrowLeft />
          <h3 style={{ fontSize: "20px" }}>Voltar para home</h3>
        </Link>

        <Nav className="login">
          {isLogged ? (
            <div
              className="profile"
              onClick={logout}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <BiUserCircle
                style={{
                  fontSize: "24px",
                  color: "var(--title-color)",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              />
              <h3 style={{ fontSize: "20px" }}>{user.name}</h3>
            </div>
          ) : (
            <Button variant="outline-secondary" onClick={() => setShow(true)}>
              Fazer login
            </Button>
          )}
        </Nav>
      </header>
      <div className="box1">
        <div className="content-left">
          <div className="field">
            <select
              name="search"
              id="search"
              placeholder="Selecione uma zona"
              onChange={(e: any) => {
                setZone(Number(e.target.value));
                handleSelect();
              }}
            >
              <option
                value={0}
                onClick={() => {
                  setShowWaiting(true);
                  setShowNeighborhoods(false);
                }}
              >
                Selecione uma zona
              </option>
              {data.map((item: Neighborhoods) => (
                <option key={item.zone} value={item.zone}>
                  {`Zona ${item.zone}`}
                </option>
              ))}
            </select>
            <Button
              id="ir"
              style={{ boxShadow: "none" }}
              variant="primary"
              type="submit"
            >
              <AiFillCaretDown />
            </Button>
          </div>
          <div className="box2">
            <div className="map">
              <Map center={initialPosition} zoom={11}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {neighborhoods.map((mark: Neighborhood) => (
                  <Marker position={mark.location} key={mark.id} />
                ))}
              </Map>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="box3">
            {showWaiting && (
              <div className="waiting">
                <h1>Esperando por uma zona</h1>
                <div className="image-waiting">
                  <img src={Waiting} alt="" />
                </div>
              </div>
            )}
            {showNeighborhood && (
              <div className="neighborhoods">
                <div className="text">
                  <h1>Zona {zone}</h1>
                </div>
                <div className="box1">
                  {!!neighborhoods.length &&
                    neighborhoods.map((neighborhood: Neighborhood) => (
                      <Button
                        onClick={() => {
                          handleModalChoice(neighborhood.name);
                          setNeighborhoodId(neighborhood.id);
                        }}
                      >
                        {neighborhood.name}
                      </Button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <MessageModal
        zone={zone}
        id={neighborhoodId}
        name={choice}
        value={ModalChoice}
        handleClose={handleClose}
      />
      <LoginModal show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default SearchAndMap;
