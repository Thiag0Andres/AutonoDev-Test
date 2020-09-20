import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";

//Images
import ErrorMessage from "../../../images/ErrorMessage.svg";

import "./styles.scss";

interface Props {
  value: boolean;
  handleClose(): any;
}

const SuccessModal: React.FC<Props> = (props) => {
  return (
    <Modal
      id="modal"
      show={props.value}
      onHide={() => props.handleClose()}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="header">
        <div className="image-error">
          <img src={ErrorMessage} alt="" />
        </div>
      </Modal.Header>

      <Modal.Body
        className="body"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p> Você deve digitar alguma mensagem para poder enviar </p>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
