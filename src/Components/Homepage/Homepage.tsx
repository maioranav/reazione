import React, { useState } from "react";
import { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.scss";
import { Regole } from "../Regole/Regole";

export const Homepage = () => {
  const navigate = useNavigate();
  const [showRules, setShowRules] = useState(false);

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
        <Button
          variant="secondary"
          onClick={() => {
            setShowRules(true);
          }}
          className="show-rules-btn my-5"
        >
          Regolamento
        </Button>
        <Regole
          show={showRules}
          close={() => {
            setShowRules(false);
          }}
        ></Regole>
        <Alert className="d-block d-xl-none" variant="warning">
          Gioca da PC per un'esperienza di gioco migliore!
        </Alert>
      </div>
    </>
  );
};
