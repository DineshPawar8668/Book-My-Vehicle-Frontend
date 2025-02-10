import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

function UpcomingFeatures() {
  return (
    <Container className="my-5">
      {/* Page Title */}
      <h1 className="text-center fw-bold display-4 mb-4">🚀 Exciting Upcoming Features</h1>
      <p className="text-center text-muted fs-5">
        Stay tuned! We are bringing new features to enhance your experience.  
      </p>

      <Card className="shadow-lg p-4">
        <Card.Body>
          {/* Driver Hiring Feature */}
          <h3 className="text-primary fw-bold">🧑‍✈️ Driver Hiring Service (Coming Soon!)</h3>
          <p className="text-muted">
            Now, you will be able to **hire professional drivers** along with your rental vehicles! Whether it's a
            long journey or just a short trip, **skilled and verified drivers** will be available at your service.
          </p>
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>✔ Verified & Experienced Drivers</ListGroup.Item>
            <ListGroup.Item>✔ Hourly, Daily & Weekly Hiring Options</ListGroup.Item>
            <ListGroup.Item>✔ Affordable Pricing with Easy Booking</ListGroup.Item>
            <ListGroup.Item>✔ Live Driver Tracking & Ratings</ListGroup.Item>
          </ListGroup>

          {/* Advanced Booking Service */}
          <h3 className="text-success fw-bold">📅 Advanced Booking Service</h3>
          <p className="text-muted">
            Planning ahead? Now you can **schedule your vehicle rental in advance** and secure the best deals.
          </p>
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>✔ Book Vehicles Weeks or Months in Advance</ListGroup.Item>
            <ListGroup.Item>✔ Early Bird Discounts & Exclusive Offers</ListGroup.Item>
            <ListGroup.Item>✔ Instant Confirmation & Secure Payments</ListGroup.Item>
            <ListGroup.Item>✔ Modify or Cancel Bookings Easily</ListGroup.Item>
          </ListGroup>

          {/* AI-Powered Recommendation System */}
          <h3 className="text-warning fw-bold">🤖 AI-Powered Vehicle Recommendations</h3>
          <p className="text-muted">
            Our system will **suggest the best vehicle** for your needs based on your trip type and past preferences.
          </p>
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>✔ Smart AI Analysis of Your Travel Needs</ListGroup.Item>
            <ListGroup.Item>✔ Personalized Vehicle Suggestions</ListGroup.Item>
            <ListGroup.Item>✔ Saves Time & Ensures Best Match</ListGroup.Item>
          </ListGroup>

          {/* Live Customer Support */}
          <h3 className="text-danger fw-bold">📞 24/7 Live Customer Support</h3>
          <p className="text-muted">
            Need help? Our new **Live Chat & Call Support** feature will let you connect with our experts instantly.
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item>✔ Instant Chat Support with Experts</ListGroup.Item>
            <ListGroup.Item>✔ 24/7 Assistance for Bookings & Queries</ListGroup.Item>
            <ListGroup.Item>✔ Call Support for Quick Resolutions</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UpcomingFeatures;
