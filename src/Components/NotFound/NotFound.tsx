import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column">
      <h2>Cosa stai cerdando di fare?</h2>
      <Button onClick={() => navigate("/")}>Torna alla home!</Button>
    </div>
  );
};
