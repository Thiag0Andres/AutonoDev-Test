import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

//image
import PointMap from "../../images/PointMap.svg";

import "./styles.scss";

const Menu: React.FC = () => {
  return (
    <div className="page-home">
      <div className="image">
        <img src={PointMap} alt="" />
      </div>
      <div className="content">
        <main className="info">
          <h1>Seu site de opniões .</h1>
          <p>
            Ajudamos pessoas a encontarem comentarios sobre as zonas de João
            Pessoa.
          </p>

          <Link to="/search-zone">
            <span>
              <BiSearchAlt />
            </span>
            <strong>Procrure por uma zona no mapa</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};
export default Menu;
