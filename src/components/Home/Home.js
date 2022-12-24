import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import codeHomeLogo from "../../Assets/undraw_code.svg";
import tradeHomeLogo from "../../Assets/undraw_stocks.svg";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                hey there{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                i'm
                <strong className="main-name"> sridip dutta</strong>
              </h1>

              <div style={{ paddingLeft: 45, paddingRight: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={codeHomeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
            </Col>
            <Col md={7}>
              <Card className="quote-card-view" style={{ paddingLeft: 45 }}>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "25px", textDecoration: "underline" }} className="purple">skills </span>
                    <br />
                    go, vue, gcp, psql, timescaledb, node, react, mongodb
                    <br />
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "25px", textDecoration: "underline" }} className="purple">tools </span>
                    <br />
                    git, postman, logdna, linux, segment
                    <br />
                  </p>
                </blockquote>
                </Card>
            </Col>
            <Col md={5} className="home-about-social">
            <h5>currently working as an
            <span style={{fontSize: "23px"}} className="purple"> swe </span> </h5> 
            <h5>with</h5> 
            <span style={{fontSize: "23px"}} className="purple">economize.cloud</span>
            <br />
          </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
