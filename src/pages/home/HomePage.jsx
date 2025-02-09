import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

function HomePage() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const categories = ["Sedan", "SUV", "Hatchback", "Truck"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

  // Mock vehicle data
  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      location: "New York",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Ford Explorer",
      type: "SUV",
      location: "Los Angeles",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Honda Civic",
      type: "Hatchback",
      location: "Chicago",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Chevrolet Silverado",
      type: "Truck",
      location: "Houston",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Filtered vehicles based on selected location and category
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      (location === "" || vehicle.location === location) &&
      (category === "" || vehicle.type === category)
  );

  return (
    <Container className="mt-4">
      {/* Filter Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Location:</Form.Label>
            <Form.Select value={location} onChange={handleLocationChange}>
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Category:</Form.Label>
            <Form.Select value={category} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Vehicle List */}
      <h3 className="text-center mb-3">Explore Vehicles</h3>
      <p className="text-center text-muted">
        Use the filters above to customize your search and explore vehicles available in your selected location and category.
      </p>

      <Row>
        {filteredVehicles.map((vehicle) => (
          <Col md={3} key={vehicle.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={vehicle.image} height="150" />
              <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text>
                  {vehicle.type} - {vehicle.location}
                </Card.Text>
                <Button variant="primary" className="w-100">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
