import React from "react";

//Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MessageModal: React.FC = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default MessageModal;
