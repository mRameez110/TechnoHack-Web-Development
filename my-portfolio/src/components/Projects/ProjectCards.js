import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { AiFillChrome } from "react-icons/ai"

function ProjectCards(props) {

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title> <b>{props.title}</b> </Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.tech}
        </Card.Text>

        <Button
          variant="primary"
          href={props.test}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <AiFillChrome /> &nbsp;
          {"Test App"}
        </Button>

        <Button
          variant="primary"
          color="orange"
          href={props.git}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <BsGithub /> &nbsp;
          {"Github link"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
