import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./styles.scss";

interface MyProps {
  show: boolean;
  onHide: any;
}

const LoginModal = ({ show, onHide }: MyProps) => {
  const props = { show, onHide };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <h4>Logo</h4>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="primary-button">
          Entrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
