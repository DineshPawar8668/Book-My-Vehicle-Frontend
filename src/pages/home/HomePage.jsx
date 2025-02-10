import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/slices/userSlice";
import { getVehiclelist } from "../../redux/slices/vehicleSlice";
import car1 from "../../assets/car1.jpg";
import Spinner from "../../components/Spinner";
import Testimonial from "../../components/Testimonial"; // ✅ Import Testimonial Component

function HomePage() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { vehicleList, loading } = useSelector((state) => state.vehicle);

  useEffect(() => {
    dispatch(getUserData());
    if (!vehicleList?.length) {
      dispatch(getVehiclelist());
    }
  }, [dispatch]);

  const handleLocationChange = (event) => setLocation(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const categories = ["Sedan", "SUV", "Hatchback", "Truck"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

  const filteredVehicles = vehicleList?.filter(
    (vehicle) =>
      (location === "" || vehicle.location === location) &&
      (category === "" || vehicle.type === category)
  );

  return (
    <Container className="mt-4">
      {/* Filter Section */}
      <Row className="mb-2">
        <Col md={2}>
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

        <Col md={2}>
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

      {/* Vehicles Section */}
      <div
        style={{
          marginTop: "5vh",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="text-center mb-3">Explore Vehicles</h2>
        <p className="text-center text-muted">
          Use the filters above to customize your search and explore vehicles
          available in your selected location and category.
        </p>

        {loading ? (
          <Spinner height={"30vh"} />
        ) : (
          <Row>
            {filteredVehicles?.length > 0 ? (
              filteredVehicles.map((d) => (
                <Col md={3} key={d._id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={car1} height="150" />
                    <Card.Body>
                      <Card.Title>
                        {d?.vehicle?.name || "Unknown Vehicle"}
                      </Card.Title>
                      <Card.Text>
                        {d?.vehicle?.type || "-"} - {d?.location || "Unknown"}
                      </Card.Text>
                      <Button variant="primary" className="w-100">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div
                className="text-center"
                style={{ height: "50vh", marginTop: "7vh" }}
              >
                <p>No vehicles available for now.</p>
              </div>
            )}
          </Row>
        )}
      </div>

      <Testimonial />
    </Container>
  );
}

export default HomePage;
