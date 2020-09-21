import React, { useEffect, useState } from "react";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

//Redux e Auth
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { removeUser } from "../../store/ducks/user/actions";
import { isAuthenticated } from "../../services/auth";

//Types
import { User } from "../../store/ducks/user/types";

//Message
import { useSnackbar } from "notistack";

//Components
import LoginModal from "../Modal/LoginModal";

//Icons
import { BiUserCircle } from "react-icons/bi";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  const { enqueueSnackbar } = useSnackbar();

  //Estados
  const [show, setShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  //Mudança de scroll para cima e para baixo
  const scrollToNextPage = () => window.scrollTo(0, 1000);
  const scrollToPreviousPage = () => window.scrollTo(0, 0);

  // Atualiza o estado de autenticação na mudança de usuário
  useEffect(() => {
    const response = isAuthenticated();
    setIsLogged(response);
  }, [user]);

  //Logout do usuário
  const logout = () => {
    enqueueSnackbar("Usuário deslogado com sucesso!", { variant: "info" });
    dispatch(removeUser());
  };

  return (
    <>
      <Navbar id="navbar" bg="light" expand="lg" fixed="top">
        <Navbar.Brand className="logo" href="/">
          <h1 style={{ fontSize: "26px" }}>AutonoDev</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={scrollToPreviousPage}>Home</Nav.Link>
            <Nav.Link onClick={scrollToNextPage}>Sobre</Nav.Link>
          </Nav>
          <Nav className="login">
            {isLogged ? (
              <div
                className="profile"
                onClick={logout}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <BiUserCircle
                  style={{
                    fontSize: "24px",
                    color: "var(--title-color)",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                />
                <h3 style={{ fontSize: "20px" }}>{user.name}</h3>
              </div>
            ) : (
              <Button variant="outline-secondary" onClick={() => setShow(true)}>
                Fazer login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default NavBar;
