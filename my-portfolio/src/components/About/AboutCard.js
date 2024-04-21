import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a fresh{" "}
            <span className="purple">
              <b> Graduate in Computer Science </b>
            </span>
            from{" "}
            <span className="purple">
              {" "}
              <b> Comsats Insitute of Information Technologies. </b>{" "}
            </span>
            <br />
            <br />
            <b>Extra Curricular activities other than programming..</b>
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Cricket
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Movies
            </li>
            <li className="about-activity">
              <VscDebugBreakpointDataUnverified /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experience is the name everyone gives to their mistakes!"
          </p>
          <p className="purple">~Oscar Wilde</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
