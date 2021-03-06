import React, { useState } from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Auth
import { isAuthenticated } from "../../../services/auth";

//Components
import SuccessModal from "../SuccessModal";
import ErrorModal from "../ErrorModal";
import WarningModal from "../WarningModal";

import "./styles.scss";

interface Props {
  zone: number;
  id: number;
  name: string;
  value: boolean;
  handleClose(): any;
}

const MessageModal: React.FC<Props> = (props) => {
  //Estados
  const [feedback, setFeedback] = useState<string>("");
  const [feedbackAux, setFeedbackAux] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  //Mostra modal Warning
  const handleShowWarning = () => setShowWarning(true);

  //Fecha os modais
  const handleClose = () => {
    setShowSuccessModal(false);
    setShowError(false);
    setShowWarning(false);
  };

  //Submissão para o modal de sucesso
  const handleSubmit = () => {
    const isLogged = isAuthenticated();

    if (isLogged) {
      if (feedback) {
        setShowSuccessModal(true);
        setFeedbackAux(feedback);
        setFeedback("");
        props.handleClose();
      } else {
        setShowError(true);
      }
    } else handleShowWarning();
  };

  return (
    <>
      <Modal
        id="modal"
        show={props.value}
        onHide={() => props.handleClose()}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h5 style={{ fontSize: "20px" }}>
            Realize seu feedback sobre o(a) <br /> {props.name}
          </h5>

          <div className="form-control-container">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                className="text-area"
                as="textarea"
                style={{
                  resize: "none",
                  width: "100%",
                  height: "150px",
                  marginTop: "10px",
                }}
                placeholder="Escreva aqui"
                value={feedback}
                onChange={(e) => {
                  setFeedback(e.target.value);
                  console.log(feedback);
                }}
              />
            </Form.Group>
          </div>
          <div
            className="buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Button className="enviar" onClick={() => handleSubmit()}>
              Enviar
            </Button>
            <Button variant="danger" onClick={() => props.handleClose()}>
              Cancelar
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <SuccessModal
        zone={props.zone}
        id={props.id}
        neighborhood={props.name}
        feedback={feedbackAux}
        value={showSuccessModal}
        handleClose={handleClose}
      />

      <ErrorModal value={showError} handleClose={handleClose} />
      <WarningModal value={showWarning} handleClose={handleClose} />
    </>
  );
};

export default MessageModal;
