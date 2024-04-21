// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillFacebook,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Web Development Is My Passion</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>M RAMEEZ ASHRAF</h3>
//         </Col>

//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/muazz056"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>

//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/chaudhry-muaz-ijaz-30b8a0203/"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>

//             <li className="social-icons">
//               <a
//                 href="https://www.facebook.com/profile.php?id=100076438240158"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillFacebook />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 className="" style={{ textAlign: "left" }}>
            Web Development Is My Passion
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 className="text-center">M RAMEEZ ASHRAF</h3>
        </Col>

        <Col md="4" className="footer-body d-flex justify-content-end">
          <ul className="footer-icons list-unstyled d-flex m-0">
            <li className="social-icons">
              <a
                href="https://github.com/mRameez110"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rameez-ashraf-/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/rameez.ashraf.92123"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
