import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import FYP from "../../Assets/Projects/FYP SignUp page.PNG";
import nodeAppBackend from "../../Assets/Projects/Node Contact Backend-App.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Recent projects I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FYP}
              title="Online Doctor Appointment Application"
              description="Online Appointment web App using MERN Stack "
              tech="Technology Includes:
              React , mongodb , express and nodejs.."
              test=""
              git="https://github.com/mRameez110/Our-FYP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodeAppBackend}
              title="Contact-App back-end"
              description="It is Contact-App backend using Node JS, Cover all CRUD Operations
              and Authentication, Authorization... Have ref entity to access only own contacts.... "
              tech="Technology Includes:
              Node, Express, Token etc..."
              test=""
              git="https://github.com/mRameez110/Contact-App-Backend-Nodejs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
