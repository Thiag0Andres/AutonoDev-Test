import React from "react";

//Bootstrap
import Nav from "react-bootstrap/Nav";

const Footer: React.FC = () => {
  return (
    <Nav
      className="mr-auto"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Nav.Link>Home</Nav.Link>
    </Nav>
  );
};

export default Footer;
