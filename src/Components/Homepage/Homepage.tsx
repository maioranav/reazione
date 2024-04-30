import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <audio preload="metadata" autoPlay>
        <source type="audio/mpeg" src="/sounds/intro.mp3" />
      </audio>
      <Button onClick={() => navigate("/play")}>GIOCA!</Button>
    </>
  );
};
