import React, { useState } from "react";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav.Link href="/">Link</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setShow(true)}>
                Fazer Login
              </NavDropdown.Item>
              <NavDropdown.Item href="Cadastro">Cadastre-se</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Sair">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default NavBar;
