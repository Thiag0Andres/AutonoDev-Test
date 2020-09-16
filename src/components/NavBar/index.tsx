import React from "react";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Link</Nav.Link>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="Login">Fazer Login</NavDropdown.Item>
            <NavDropdown.Item href="Cadastro">Cadastre-se</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Sair">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
