import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

// Redux
import { useSelector, RootStateOrAny } from "react-redux";

//Types
import { User } from "../../../store/ducks/user/types";

//Images
import SuccessMessage from "../../../images/SuccessMessage.svg";

import "./styles.scss";

interface Props {
  zone: number;
  id: number;
  neighborhood: string;
  feedback: string;
  value: boolean;
  handleClose(): any;
}

const SuccessModal: React.FC<Props> = (props) => {
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
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
        <div className="image-success">
          <img src={SuccessMessage} alt="" />
        </div>
        <h6>Feedback realizado com sucesso</h6>
      </Modal.Header>

      <Modal.Body className="body">
        <div className="text-container">
          <Row className="row-container">
            <p style={{ fontWeight: "bolder" }}> {user && user.name}</p>
          </Row>
          <p style={{ fontWeight: "bolder" }}>
            {props.neighborhood}: Zona {props.zone} / ID = {props.id}
          </p>
          <div className="box1">
            <p>{props.feedback}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
