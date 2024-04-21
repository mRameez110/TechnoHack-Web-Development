import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

console.log("working..");
export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email submit result is", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Email submit error is", error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your First Name"
          name="fname"
          id="fname"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          id="email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Label>Your Message</Form.Label>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Message"
        placeholder="Leave a comment here.."
      >
        <Form.Control
          id="message"
          name="message"
          as="textarea"
          type="text"
          placeholder="Leave a comment here.."
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <br />

      <Button variant="primary" type="submit" value="send" id="btn">
        Submit
      </Button>
    </Form>
  );
};

export default Email;
