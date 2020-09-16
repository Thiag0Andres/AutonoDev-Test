import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

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
    <div id="page-search-map">
      <fieldset>
        <legend>
          <h2>Endereço</h2>
          <span>Selecione uma Zona do mapa</span>
        </legend>

        <Map center={initialPosition} zoom={11}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={initialPosition} />
        </Map>

        <div className="field">
          <label htmlFor="uf">UF</label>
          <select
            name="uf"
            id="uf"
            /*             value={selectedUf}
            onChange={handleSelectUf} */
          >
            <option value="0">Selecione um estado</option>
            {/*             {ufs.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))} */}
          </select>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchAndMap;
