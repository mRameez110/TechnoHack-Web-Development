import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCloudera, SiBootstrap, SiCss3 } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiCplusplus, SiExpress, SiHtml5, SiJquery } from "react-icons/si";

function Techstack() {
  // Mapping object to map each icon component to its corresponding name
  const iconComponents = [
    { Icon: SiCloudera, name: "C Language" },
    { Icon: SiCplusplus, name: "C ++" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: DiReact, name: "React.js" },
    { Icon: DiMongodb, name: "MongoDB" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiBootstrap, name: "BootSTrap" },
    // { Icon: DiGit, name: "Git" },
    { Icon: SiJquery, name: "jQuery" },
    { Icon: DiPython, name: "Python" },
    { Icon: SiExpress, name: "Express.js" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconComponents.map(({ Icon, name }) => (
        <Col key={name} xs={4} md={2} className="tech-icons" title={name}>
          <div>
            <Icon />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
