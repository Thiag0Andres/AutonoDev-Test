import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

//Icons
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

//Types
import { Icon } from "../../services/types";

import "./styles.scss";

const Footer: React.FC = () => {
  //Icones com links
  const icons: Icon[] = [
    { icon: FaGithub, link: "https://github.com/Thiag0Andres" },
    {
      icon: FaLinkedinIn,
      link: "https://linkedin.com/in/thiago-andres-paiva-palacios-180b541aa",
    },
    { icon: FaInstagram, link: "https://www.instagram.com/thiago_app/" },
    { icon: AiOutlineMail, link: "mailto:thiagopalacios@eng.ci.ufpb.br" },
  ];

  return (
    <Navbar id="navbar" bg="light" expand="sm" fixed="bottom">
      <Container fluid id="footer">
        <div className="footer-center">
          {icons.map((Icon) => (
            <div className="icons">
              <a href={Icon.link} target="__blank">
                <Icon.icon size={26} color={"#777777"} className="icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="footer-end">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            href="https://linkedin.com/in/thiago-andres-paiva-palacios-180b541aa"
            target="__blank"
            className="link"
          >
            Thiago Andres
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
