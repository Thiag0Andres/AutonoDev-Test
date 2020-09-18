/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//data
import dataJSON from "../../data/neighborhoods.json";

//leaflet
import { Map, TileLayer, Marker } from "react-leaflet";

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
  };

  return (
    <div id="page-search-map">
      <div className="d-flex">
        <Form.Group className="form-search">
          <Form.Control
            className="form-control form-control-lg"
            as="select"
            placeholder="Selecione uma zona"
            onChange={(e: any) => {
              setZone(Number(e.target.value));
              handleSelect();
            }}
          >
            <option value={0}> Selecione uma zona</option>
            {data.map((item: Neighborhoods) => (
              <option key={item.zone} value={item.zone}>
                {`Zona ${item.zone}`}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
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
      {showNeighborhood && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="neighborhoods">
            {!!neighborhoods.length &&
              neighborhoods.map((neighborhood: Neighborhood) => (
                <Button className="botao-neighborhoods">
                  {neighborhood.name}
                </Button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndMap;
