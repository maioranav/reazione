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
    <Modal show={show} backdrop="static" keyboard={false} onHide={handleReset} style={{ margin: "20dvh auto" }}>
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title>Game Over !!!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        Avete totalizzato&nbsp;<b>{points}</b>&nbsp;punti.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={handleReset}>
          Ricomincia
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
