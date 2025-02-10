import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "./staticpage.css"; 

function ContactUs() {
  return (
    <Container className="mt-4 mb-4">
      {/* Title Section */}
      <Row className="text-center">
        <Col>
          <h3 className="fw-bold text-uppercase contact-heading">Contact Us</h3>
          <p className="contact-subtext">
            Have questions or need assistance? Fill out the form below, and we'll get back to you soon!
          </p>
        </Col>
      </Row>

      {/* Form Section */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form className="shadow-lg p-4 rounded form-container">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message here..." required />
            </Form.Group>

            <Button type="submit" className="w-100 fw-bold">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
