import React from "react";

//images
import Map from "../../images/Map.svg";

import "./styles.scss";

const About: React.FC = () => {
  return (
    <div id="page-home-about">
      <div className="content">
        <main className="info">
          <h1> O que é o AutonoDev?</h1>
          <p>
            AutonoDev é uma ferramenta desenvolvida para localizar as diversas
            zonas de João Pessoa. Foi idealizado no intuito de coletar
            informações, a partir de comentários das respectivas zonas da
            cidade, para promover um feedback das regiões.
          </p>
        </main>
      </div>
      <div className="image-about">
        <img src={Map} alt="" />
      </div>
    </div>
  );
};
export default About;
