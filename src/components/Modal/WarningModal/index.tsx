import React, { useState } from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Components
import LoginModal from "../LoginModal";

//Images
import Warning from "../../../images/Warning.svg";

import "./styles.scss";

interface Props {
  value: boolean;
  handleClose(): any;
}

const SuccessModal: React.FC<Props> = (props) => {
  //Estados
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    props.handleClose();
    setShow(true);
  };

  return (
    <>
      <Modal
        id="modal"
        show={props.value}
        onHide={() => props.handleClose()}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="header">
          <div className="warning">
            <img src={Warning} alt="" />
          </div>
        </Modal.Header>

        <Modal.Body
          className="body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p> Você precisa estar logado para poder enviar alguma mensagem </p>

          <div
            className="buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Button className="enviar" onClick={handleLogin}>
              Fazer login
            </Button>
            <Button variant="danger" onClick={props.handleClose}>
              Voltar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <LoginModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default SuccessModal;
