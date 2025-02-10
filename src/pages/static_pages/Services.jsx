import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "🚖 Vehicle Booking",
    description: "Book a vehicle instantly with our easy and user-friendly booking system.",
  },
  {
    title: "🚗 Vehicle Listing",
    description: "Vehicle owners can list their vehicles for rent and earn money effortlessly.",
  },
  {
    title: "🧑‍✈️ Driver Hiring",
    description: "Hire experienced and verified drivers for a hassle-free journey.",
  },
  {
    title: "📍 Live Tracking",
    description: "Track your booked vehicle in real-time for better safety and convenience.",
  },
  {
    title: "📅 Advanced Scheduling",
    description: "Schedule your bookings in advance and secure the best deals.",
  },
  {
    title: "💳 Secure Payments",
    description: "Make payments easily using multiple payment options with full security.",
  },
  {
    title: "⭐ Customer Reviews",
    description: "Check ratings and reviews before booking to ensure quality service.",
  },
  {
    title: "🔄 Easy Cancellations",
    description: "Cancel your bookings with flexible refund policies and easy processing.",
  },
];

function Services() {
  return (
    <Container className="my-5">
      {/* Page Title */}
      <h1 className="text-center fw-bold display-4 mb-4">🚀 Our Services</h1>
      <p className="text-center text-muted fs-5">
        Discover the range of services we offer to make your travel experience smooth and convenient.
      </p>

      <Row className="gy-4">
        {services.map((service, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="shadow-sm p-3 h-100">
              <Card.Body>
                <h4 className="fw-bold">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
