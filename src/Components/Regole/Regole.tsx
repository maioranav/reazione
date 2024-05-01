import { Button, Modal } from "react-bootstrap";
import "./Regole.scss";

interface IRegole {
  show: boolean;
  close: () => void;
}

export const Regole = ({ show: isShown, close }: IRegole) => {
  return (
    <>
      <Modal show={isShown} backdrop="static" keyboard={false} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Come si gioca?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sezione in allestimento</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={close}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
