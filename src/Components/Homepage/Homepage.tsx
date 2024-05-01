import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.scss";

export const Homepage = () => {
  const navigate = useNavigate();

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current?.play();
  }, [audioRef]);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <audio preload="metadata" autoPlay ref={audioRef}>
          <source type="audio/mpeg" src="/sounds/intro.mp3" />
        </audio>
        <Button variant="primary" onClick={() => navigate("/play")} className="start-game-btn my-5">
          GIOCA!
        </Button>
        <Button variant="secondary" onClick={() => {}} className="show-rules-btn my-5">
          Regolamento
        </Button>
      </div>
    </>
  );
};
