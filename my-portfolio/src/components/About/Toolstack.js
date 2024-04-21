import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAnaconda, SiVisualstudiocode, SiMongodb } from "react-icons/si";
import { BiCompass, BiAtom } from "react-icons/bi";
import { DiGit, DiDatabase } from "react-icons/di";

function Toolstack() {
  const iconComponents = [
    { Icon: SiVisualstudiocode, name: "Visual Studio Code" },
    { Icon: BiAtom, name: "Atom IDE" },
    { Icon: DiGit, name: "Git" },
    { Icon: BiCompass, name: "Compass" },
    { Icon: SiAnaconda, name: "Anaconda" },
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

export default Toolstack;
