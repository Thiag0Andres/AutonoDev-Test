import React, { useState } from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import SuccessModal from "../SuccessModal";
import ErrorModal from "../ErrorModal";

import "./styles.scss";

interface Props {
  zone: number;
  id: number;
  name: string;
  value: boolean;
  handleClose(): any;
}

const MessageModal: React.FC<Props> = (props) => {
  const [feedback, setFeedback] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => {
    setShowSuccessModal(false);
    setShowError(false);
  };

  const handleSubmit = () => {
    if (feedback) {
      setShowSuccessModal(true);
      props.handleClose();
    } else if (" ") {
      setShowError(true);
    }
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
        feedback={feedback}
        value={showSuccessModal}
        handleClose={handleClose}
      />

      <ErrorModal value={showError} handleClose={handleClose} />
    </>
  );
};

export default MessageModal;
