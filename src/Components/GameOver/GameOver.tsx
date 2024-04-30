import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IGameOver {
  points: number;
  show: boolean;
}

export const GameOver = ({ points, show }: IGameOver) => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/");
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} onHide={handleReset}>
      <Modal.Header closeButton>
        <Modal.Title>Game Over !!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Avete totalizzato <b>{points}</b> punti.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleReset}>
          Ricomincia
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
