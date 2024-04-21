import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import pdf from "../../Assets/../Assets/MY-SAMPLE-cv.pdf";
import pdf from "../../Assets/Rameez Resume_FU.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import pdf2 from "../../Assets/../Assets/certificate.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume">
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload
          style={{ fontSize: "2em", color: "blue", marginRight: "5px" }}
        />
        View / Download CV
      </Button>
    </div>
  );
}

export default ResumeNew;
