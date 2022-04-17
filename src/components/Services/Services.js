import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Services = ({ service }) => {
  const { name, img, price, about } = service;
  const navigate = useNavigate();
  const handleBookNow = ()=> {
    navigate("/checkout");
  }
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>{price}</Card.Text>
        <Card.Text>{about}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button onClick={handleBookNow} className=" btn btn-primary w-100">Book Now</button>
      </Card.Footer>
    </Card>
  );
};

export default Services;
