import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current?.play();
  }, [audioRef]);

  return (
    <>
      <audio preload="metadata" autoPlay ref={audioRef}>
        <source type="audio/mpeg" src="/sounds/intro.mp3" />
      </audio>
      <Button onClick={() => navigate("/play")}>GIOCA!</Button>
    </>
  );
};
