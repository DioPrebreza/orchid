import React from "react";
import DateTimeDisplay from "./DateTimeDisplay.js";
import { useCountdown } from "../Hooks/useCountdown.js";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./SalePromotion.module.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={classes.show_counter}>
      <Row>
        <Col className={classes.countdown_section}>
          <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        </Col>
        <Col className={classes.countdown_section}>
          <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        </Col>
        <Col className={classes.countdown_section}>
          <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        </Col>
        <Col className={classes.countdown_section}>
          <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
        </Col>
      </Row>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <p>Countdown Expired..</p>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
