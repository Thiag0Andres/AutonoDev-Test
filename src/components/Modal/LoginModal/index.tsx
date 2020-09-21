import React, { useState } from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Message
//import { useSnackbar } from "notistack";

//Redux e Auth
import { checkAuth } from "../../../services/validation";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/ducks/user/actions";

import "./styles.scss";

interface Props {
  show: boolean;
  onHide(): any;
}

const LoginModal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  //const { enqueueSnackbar } = useSnackbar();

  //Estados
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = () => {
    // Cria um usuário padrão
    const user = {
      id: "1",
      email: email.trim(),
      name: "Thiago",
      token: "tokem_valido",
    };
    //Validação do email
    const isEmailValid = checkAuth("email", email.trim());

    //Verificando autenticação
    const isValidated = checkAuth("auth", {
      email: email.trim(),
      password,
    });

    if (email === "") {
      //enqueueSnackbar("Campo email vazio", { variant: "error" });
    } else if (password === "") {
      //enqueueSnackbar("Campo senha vazio", { variant: "error" });
    } else if (!isEmailValid) {
      //enqueueSnackbar("Email inválido!", { variant: "error" });
    } else if (isValidated) {
      dispatch(updateUser({ user }));
      //enqueueSnackbar("Usuário logado com sucesso!", { variant: "success" });
      props.onHide();
    } else {
      setEmail("");
      setPassword("");
      //enqueueSnackbar("Falha ao autenticar.", { variant: "error" });
    }
  };

  return (
    <Modal
      id="modal"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-header">
        <h4>AutonoDev</h4>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button onClick={signIn} className="primary-button">
          Entrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
