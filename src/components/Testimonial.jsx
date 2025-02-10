import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  { name: "John Doe", feedback: "Amazing experience! The car was in perfect condition.", location: "New York", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Jane Smith", feedback: "Smooth booking process and excellent customer service.", location: "Los Angeles", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Michael Johnson", feedback: "Great pricing and a wide selection of vehicles.", location: "Chicago", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Emily Davis", feedback: "Highly recommended for quick and easy rentals!", location: "Houston", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Chris Brown", feedback: "Best car rental service I've ever used.", location: "Miami", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Sophia Wilson", feedback: "Affordable rates and a hassle-free process.", location: "Seattle", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { name: "David Lee", feedback: "I always rent from here, never disappointed.", location: "San Francisco", image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { name: "Olivia Martinez", feedback: "The staff was friendly and helpful.", location: "Las Vegas", image: "https://randomuser.me/api/portraits/women/8.jpg" },
  { name: "Ethan White", feedback: "Great service, clean cars, and good prices.", location: "Denver", image: "https://randomuser.me/api/portraits/men/9.jpg" },
  { name: "Mia Anderson", feedback: "Will definitely rent again from this company!", location: "Boston", image: "https://randomuser.me/api/portraits/women/10.jpg" }
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

function Testimonial() {
  return (
    <Container className="mt-5 mb-4">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={true} showDots={true}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h5>{testimonial.name}</h5>
            <small className="text-muted">{testimonial.location}</small>
            <p className="mt-2">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default Testimonial;
