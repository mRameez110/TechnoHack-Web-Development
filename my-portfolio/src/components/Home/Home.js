import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import ResumeNew from "../Resume/ResumeNew";
import Tilt from "react-parallax-tilt";

function Home() {

  return (

    <section  >
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello 
                <span className="wave" role="img" aria-labelledby="wave">
                  🤚 
                </span>
                Welocome on My Profile!{" "}
              </h1>

              <h1> <span className="wave" role="img" aria-labelledby="wave">  </span>  </h1>
               
             
              <h1 className="heading-name">
                I 'm
                <strong className="main-name"> Rameez Ashraf</strong>
              </h1>


              <div style={{marginLeft:80 , display: "inline-block", paddingTop: 0,
              backgroundColor: "green", textAlign: "left", textTransform: "uppercase" }}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign:"right" }}>
              
              <Tilt>
                <img className="img1"
                  src={require("../Home/me2.jpeg")}
                  alt="add pic"

                />
              </Tilt>
            </Col>

          </Row>
        </Container>


      </Container>
      <Home2 />
      <ResumeNew />
    </section>
  );
}

export default Home;
