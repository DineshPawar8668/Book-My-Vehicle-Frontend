import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Card
      style={{
        background: "linear-gradient(to right, #0D47A1, rgb(73, 97, 121))",
        color: "white",
        border: "none",
      }}
    >
      <Card.Body>
        <Container>
          <Row>
            {/* About Us */}
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                Your trusted platform for vehicle rentals and driver hiring.
                Reliable, affordable, and hassle-free service.
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-white">
                    Our Services
                  </a>
                </li>
              </ul>
            </Col>

            {/* Contact Information */}
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: support@vehiclehub.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Location: Mumbai, India</p>
            </Col>
          </Row>
        </Container>
      </Card.Body>

      <Card.Footer className="text-center" style={{ borderTop: "1px solid white" }}>
        &copy; {new Date().getFullYear()} VehicleHub. All rights reserved.
      </Card.Footer>
    </Card>
  );
}

export default Footer;
