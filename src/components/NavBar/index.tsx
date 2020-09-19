import React, { useState } from "react";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

//Component
import LoginModal from "../Modal/LoginModal";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const scrollToNextPage = () => window.scrollTo(0, 1000);
  const scrollToPreviousPage = () => window.scrollTo(0, 0);

  return (
    <>
      <Navbar id="navbar" bg="light" expand="lg" fixed="top">
        <Navbar.Brand className="logo" href="/">
          AutonoDev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={scrollToPreviousPage}>Home</Nav.Link>
            <Nav.Link onClick={scrollToNextPage}>Sobre</Nav.Link>
          </Nav>
          <Nav className="login">
            <Button variant="outline-secondary" onClick={() => setShow(true)}>
              Fazer login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default NavBar;
