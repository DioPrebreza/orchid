import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./LandingHeader.module.css";

const LandingHeader = (props) => {
  return (
    <div class={classes.landingheader_container}>
      <Container>
        <Row>
          <Col md={5} className={classes.header_col}>
            <p>
              <FontAwesomeIcon icon={faFire} style={{ marginRight: "5px" }} />
              Hot Deal in This Week
            </p>
            <h1>Roco Wireless Headphones</h1>
            <Row>
              <Col sm={5}>
                <Button className={classes.header_shopnow_btn}>Shop Now</Button>
              </Col>
              <Col sm={5}>
                <span className={classes.rating_icons}>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    style={{ marginRight: "5px" }}
                  />
                  <p style={{ color: "black", fontSize: "1em" }}>
                    100+ reviews
                  </p>
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={5} className={classes.header_col}>
            <img
              src={require("../../images/roco-headphones.png")}
              width={"100%"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingHeader;
