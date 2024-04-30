import { Button, Col, Container, Row } from "react-bootstrap";
import "./Scoreboard.scss";
import { NoClick } from "../NoClick/NoClick";
import { useEffect, useState } from "react";

export const Scoreboard = () => {
  const [time, setTime] = useState(120);
  const [points, setPoints] = useState(0);
  const [pass, setPass] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  const handlePoints = (direction: "up" | "down") => {
    if (direction === "up") {
      setPoints(points + 1);
    } else {
      if (points > 0) setPoints(points - 1);
    }
  };

  return (
    <Container className="scoreboard-main">
      <Row className="mb-3 sb-row">
        <Col className="d-flex justify-content-center align-items-center">
          <NoClick content={":" + time} color="#023047" />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <NoClick content="immaGinaRe" color="#219EBC" main={true} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <NoClick content={points?.toString()} color="#FB8500" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center py-5 gap-3">
          <Button
            className="btn-controls"
            disabled={points < 1}
            onClick={() => {
              handlePoints("down");
            }}
          >
            -1
          </Button>
          <Button
            className="btn-controls"
            onClick={() => {
              setPass(pass - 1);
            }}
            disabled={pass < 1}
          >
            {pass > 0 ? pass : "X"}
          </Button>
          <Button
            className="btn-controls"
            onClick={() => {
              handlePoints("up");
            }}
          >
            +1
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
