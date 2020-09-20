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

//Component
import MessageModal from "../Modal/MessageModal";

//Image
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
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    -7.1215022,
    -34.8814724,
  ]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [zone, setZone] = useState(0);
  const [showNeighborhood, setShowNeighborhoods] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [ModalChoice, setModalChoice] = useState(false);
  const [choice, setChoice] = useState<string>("");
  const [neighborhoodId, setNeighborhoodId] = useState(0);

  const data = dataJSON.neighborhoods;

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

  useEffect(() => {
    searchZone();
  }, [zone]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const handleSelect = () => {
    setShowNeighborhoods(true);
    setShowWaiting(false);
  };

  const handleModalChoice = (neighborhood: string) => {
    setModalChoice(true);
    setChoice(neighborhood);
  };

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
            <option value={0} onClick={() => setShowWaiting(true)}>
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
              {!!neighborhoods.length &&
                neighborhoods.map((neighborhood: Neighborhood) => (
                  <Button
                    className="botao-neighborhoods"
                    onClick={() => {
                      handleModalChoice(neighborhood.name);
                      setNeighborhoodId(neighborhood.id);
                    }}
                  >
                    {neighborhood.name}
                  </Button>
                ))}
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
