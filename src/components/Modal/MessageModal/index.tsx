import React, { useState } from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import SuccessModal from "../SuccessModal";
import ErrorModal from "../ErrorModal";

interface Props {
  zone: number;
  id: number;
  name: string;
  value: boolean;
  handleClose(): any;
}

const MessageModal: React.FC<Props> = (props) => {
  const [feedback, setFeedback] = useState("");
  const [showSucess, setShowSucess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => {
    setShowSucess(false);
    setShowError(false);
  };

  const handleSubmit = () => {
    if (feedback) {
      setShowSucess(true);
      props.handleClose();
    } else if (" ") {
      setShowError(true);
    }
  };
  return (
    <>
      <Modal
        className="modal-message"
        show={props.value}
        size="lg"
        onHide={() => props.handleClose()}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p>Realize seu feedback sobre {props.name}</p>

          <div className="form-control-container">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                className="text-area"
                as="textarea"
                rows={4}
                placeholder="Escreva aqui"
                onChange={(e) => {
                  setFeedback(e.target.value);
                  console.log(feedback);
                }}
              />
            </Form.Group>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <SuccessModal
        zone={props.zone}
        id={props.id}
        neighborhood={props.name}
        feedback={feedback}
        value={showSucess}
        handleClose={handleClose}
      />

      <ErrorModal
        zone={props.zone}
        id={props.id}
        neighborhood={props.name}
        feedback={feedback}
        value={showError}
        handleClose={handleClose}
      />
    </>
  );
};

export default MessageModal;
