import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillFacebook,
// } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ---- <span className="purple">MY INTRODUCTION </span>----
            </h1>
            <p className="home-about-body">
              I love to design Responsive Website and Making machine learning models..
              <br />
              <br />I 'm quite fluent in Javascript, Modern JavaScript(ES6), Node, Python , React...

              <br />
              <br />
              My field of Interest's are building new Web Technologies and Products.
              <br />
              <br />

              I have also learn skills for developing products
              with <b>Node.js</b> and
              <i>
                <b >
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b> React.js and Next.js, Express.js </b>
              </i>
            </p>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
