/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//Icons
import { AiFillCaretDown } from "react-icons/ai";

//Bootstrap
import Button from "react-bootstrap/Button";

//data
import dataJSON from "../../data/neighborhoods.json";

//leaflet
import { Map, TileLayer, Marker } from "react-leaflet";

//Components
import MessageModal from "../Modal/MessageModal";

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
  const [zoneSelectd, setzoneSelectd] = useState(0);
  const [showNeighborhood, setShowNeighborhoods] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [ModalChoice, setModalChoice] = useState(false);
  const [choice, setChoice] = useState<string>("");
  const [neighborhoodId, setNeighborhoodId] = useState(0);

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

  //Recebe o valor da zona
  const handleSelectZone = (value: any) => {
    setzoneSelectd(value);
  };

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

  return (
    <div id="page-search-map">
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
              <option
                key={item.zone}
                value={item.zone}
                onClick={() => handleSelectZone(item.zone)}
              >
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
        <div className="box1">
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
        <div className="box2">
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
                <h1>Zona {zoneSelectd}</h1>
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
      <MessageModal
        zone={zone}
        id={neighborhoodId}
        name={choice}
        value={ModalChoice}
        handleClose={handleClose}
      />
    </div>
  );
};

export default SearchAndMap;
