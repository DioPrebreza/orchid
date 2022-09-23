import React from "react";
import CountdownTimer from "./CountdownTimer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./SalePromotion.module.css";

const SalePromotion = (props) => {
  const THREE_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className={classes.sale_container}>
      <Row>
        <Col md={6} className={classes.sale_left}>
          <p style={{ color: "red" }}>
            <FontAwesomeIcon
              icon={faHeadphonesSimple}
              style={{ marginRight: "5px" }}
            />
            Don't Miss!!
          </p>

          <h1>Limited Offer for Your Experience</h1>
          <div className={classes.countdown}>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
          <Button>Check it Out!</Button>
        </Col>
        <Col md={5} className={classes.sale_right}>
          <img
            src={require("../../images/white-headphones.png")}
            alt="whiteheadphones"
            width="80%"
          />
          <div class={classes.music_signal}>
            <div class={`${classes.item_circle} ${classes.circle1}`}></div>
            <div class={`${classes.item_circle} ${classes.circle2}`}></div>
            <div class={`${classes.item_circle} ${classes.circle3}`}></div>
            <div class={`${classes.item_circle} ${classes.circle4}`}></div>
            <div class={`${classes.item_circle} ${classes.circle5}`}></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SalePromotion;
