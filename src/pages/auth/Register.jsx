import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log("Register details:", form);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "28rem", padding: "20px" }}>
        <h3 className="text-center">Create an Account</h3>
        <p className="text-center text-muted">
          Fill in the details below to get started.
        </p>
        <hr />

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="mt-4 w-100"
            onClick={handleRegister}
          >
            Register
          </Button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <a href="#login" className="fw-bold text-decoration-none">
              Login here
            </a>
          </p>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
