import React, { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import { Map, TileLayer, Marker } from "react-leaflet";

//Bootstrap
import Button from "react-bootstrap/Button";

import "./styles.scss";

const SearchAndMap: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <div className="content">
      <div className="d-flex">
        <div>
          <input
            id="search-bar"
            className="form-control form-control-lg "
            type="text"
            placeholder="Pesquisar por zona"
          />
        </div>
        <div className="ml-3">
          <Button id="ir" className="btn-lg" variant="primary" type="submit">
            <BiMap />
          </Button>
        </div>
      </div>
      <div className="Map">
        <Map center={initialPosition} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={initialPosition} />
        </Map>
      </div>
    </div>
  );
};

export default SearchAndMap;
