import React from "react";

//Icons
import { BiSearchAlt } from "react-icons/bi";

//Dom
import { Link } from "react-router-dom";

//images
import PointMap from "../../images/PointMap.svg";

import "./styles.scss";

const Menu: React.FC = () => {
  return (
    <div id="page-home-menu">
      <div className="image-menu">
        <img src={PointMap} alt="" />
      </div>
      <div className="content">
        <main className="info">
          <h1> Sua ferramenta de feedback</h1>
          <p>
            Ajudamos você a encontrar informações sobre as zonas de João Pessoa.
          </p>
          <Link to="/search-zone">
            <span>
              <BiSearchAlt />
            </span>
            <strong>Procure por uma zona no mapa</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};
export default Menu;
