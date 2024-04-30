import { Button, Col, Container, Row } from "react-bootstrap";
import "./Scoreboard.scss";
import { NoClick } from "../NoClick/NoClick";
import { useEffect, useState } from "react";
import { GameOver } from "../GameOver/GameOver";
import { NotFound } from "../NotFound/NotFound";

interface IScoreboard {
  words: string[];
}

export const Scoreboard = ({ words }: IScoreboard) => {
  const [time, setTime] = useState(Number(process.env.REACT_APP_MAX_TIME)); //TODO: set max timer
  const [points, setPoints] = useState(0);
  const [pass, setPass] = useState(2);
  const [activeWord, setActiveWord] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= 0 && running) {
        setShowGameOver(true);
        clearInterval(interval);
      } else {
        if (running) setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, running]);

  useEffect(() => {
    const handleKeyPress = (event: { keyCode: number }) => {
      if (event.keyCode === 32) {
        // Check if the pressed key is "SPACE" (key code 32)
        setRunning(false); // Toggle the running state
      }
    };

    if (running) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [running]);

  const handlePoints = (direction: "up" | "down") => {
    if (direction === "up") setPoints(points + 1);
    else if (points > 0) setPoints(points - 1);
  };

  const handleNewWord = (pass?: boolean) => {
    if (!running || pass) {
      if (activeWord < words.length - 1) setActiveWord(activeWord + 1);
      else {
        setShowGameOver(true);
        setRunning(false);
        return;
      }
    }
    setRunning(true);
  };

  useEffect(() => {
    handleNewWord();
  }, [points]);

  return (
    <>
      {words.length ? (
        <Container className="scoreboard-main">
          <GameOver points={points} show={showGameOver} />
          <Row className="mb-3 sb-row">
            <p style={{ position: "absolute", top: 0, left: 0, width: "100%", textAlign: "center" }}>{!running && "PAUSE"}</p>
            <Col className="d-flex justify-content-center align-items-center">
              <NoClick content={":" + time} color={running ? "#023047" : "red"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <NoClick content={words[activeWord]} color="#219EBC" main={true} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <NoClick content={points?.toString()} color="#FB8500" />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center py-5 gap-3">
              <Button
                className="btn-controls"
                disabled={points < 1 || running}
                onClick={() => {
                  handlePoints("down");
                }}
              >
                -1
              </Button>
              <Button
                className="btn-controls"
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleNewWord(true);
                  setPass(pass - 1);
                }}
                disabled={pass < 1}
              >
                {pass > 0 ? pass : "X"}
              </Button>
              <Button
                className="btn-controls"
                disabled={running}
                onClick={() => {
                  handlePoints("up");
                }}
              >
                +1
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};
