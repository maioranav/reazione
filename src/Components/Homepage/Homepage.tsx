import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/play")}>GIOCA!</Button>
    </>
  );
};
