import React from "react";
import { Card } from "react-bootstrap";

const Services = ({ service }) => {
  const { name, img, price, about } = service;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>{price}</Card.Text>
        <Card.Text>{about}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><button>Book Now</button></small>
      </Card.Footer>
    </Card>
  );
};

export default Services;
