import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";

//Images
import SuccessMessage from "../../../images/SuccessMessage.svg";

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
      className="modal-success"
      show={props.value}
      onHide={() => props.handleClose()}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="body">
        <div className="content">
          <div className="image-success">
            <img src={SuccessMessage} alt="" />
          </div>
          <p>Feedback realizado com sucesso</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
