import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import EMAIL from "./Email";

const socialLinks = [
  { icon: <AiFillGithub />, url: "https://github.com/mRameez110" },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/rameez-ashraf-/",
  },
  {
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/rameez.ashraf.92123",
  },
];

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ paddingTop: "100px", paddingLeft: "1px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                textAlign: "left",
              }}
            >
              <strong className="purple">M Rameez Ashraf</strong>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact ME Through</h1>
            <ul className="home-about-social-links">
              {socialLinks.map((link, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Button
          variant=""
          href="tel:+923244020875"
          style={{
            padding: "2px 25px 2px 10px",
            textAlign: "center",
            backgroundColor: "green",
            borderColor: "green",
            color: "#fff",
            marginBottom: "100px",
          }}
        >
          <IoLogoWhatsapp /> &nbsp;
          {"Call"}
        </Button>
        <h1 className="project-heading">
          <strong className="">EMAIL </strong>ME
        </h1>

        <EMAIL />
      </Container>
    </Container>
  );
}

export default Contact;
