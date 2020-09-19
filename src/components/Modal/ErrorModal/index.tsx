import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";

//Images
import ErrorMessage from "../../../images/ErrorMessage.svg";

interface Props {
  zone: number;
  id: number;
  neighborhood: string;
  feedback: string;
  value: boolean;
  handleClose(): any;
}

const SuccessModal: React.FC<Props> = (props) => {
  return (
    <Modal
      className="modal-error"
      show={props.value}
      onHide={() => props.handleClose()}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="body">
        <div className="image-error">
          <img src={ErrorMessage} alt="" />
        </div>
        <p> Você deve digitar alguma mensagem para enviar </p>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
