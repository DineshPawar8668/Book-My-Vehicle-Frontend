import React from "react";
import { Container, Card } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="my-5">
      {/* Page Title */}
      <h1 className="text-center fw-bold display-4 mb-4">🚗 Best Vehicle Rental Service</h1>
      <p className="text-center text-muted fs-5">Your trusted partner for hassle-free vehicle rentals!</p>

      <Card className="shadow-lg p-4">
        <Card.Body>
          {/* Who We Are */}
          <h3 className="text-primary fw-bold">Who We Are</h3>
          <p className="text-muted">
            Welcome to <b>Best Vehicle Rental Service</b>, your one-stop destination for renting high-quality vehicles
            at affordable prices. Whether you need a car for your daily commute, a bike for a quick ride, or a truck
            for heavy-duty work, we have got you covered!
          </p>

          {/* Mission */}
          <h3 className="text-success fw-bold">Our Mission</h3>
          <p className="text-muted">
            Our mission is to make vehicle rental seamless, affordable, and accessible to everyone. We aim to provide
            a smooth and hassle-free experience to ensure your journey is safe and comfortable.
          </p>

          {/* Why Choose Us? */}
          <h3 className="text-danger fw-bold">Why Choose Us?</h3>
          <ul className="text-muted">
            <li>✔ Wide range of well-maintained vehicles</li>
            <li>✔ Affordable pricing with no hidden charges</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Easy booking process and hassle-free returns</li>
            <li>✔ Flexible rental plans (hourly, daily, weekly, monthly)</li>
          </ul>

          {/* Our Services */}
          <h3 className="text-warning fw-bold">Our Services</h3>
          <ul className="text-muted">
            <li>🚘 <b>Car Rentals:</b> Luxury & Economy Cars</li>
            <li>🏍 <b>Bike Rentals:</b> Scooters & Motorbikes</li>
            <li>🚚 <b>Truck Rentals:</b> Heavy-Duty Transport</li>
            <li>🛺 <b>Auto Rentals:</b> Affordable & Convenient</li>
          </ul>

          {/* Vision */}
          <h3 className="text-info fw-bold">Our Vision</h3>
          <p className="text-muted">
            We envision a world where renting a vehicle is as easy as booking a cab. Our goal is to expand to multiple
            cities and provide top-notch service with the latest technology.
          </p>

          {/* Contact Information */}
          <h3 className="text-secondary fw-bold">Contact Us</h3>
          <p className="text-muted">
            📍 Location: 123, Main Street, New York, USA<br />
            📞 Phone: +1 234 567 890<br />
            📧 Email: support@vehiclerental.com
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutUs;
