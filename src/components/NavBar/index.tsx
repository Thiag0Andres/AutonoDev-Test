import React, { useState } from "react";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

//Component
import LoginModal from "../../components/LoginModal";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Sobre</Nav.Link>
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
