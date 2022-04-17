import React from "react";
import { Card } from "react-bootstrap";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Services = ({ service }) => {
  const { name, img, price, steps } = service;
  const navigate = useNavigate();
  const handleBookNow = ()=> {
    navigate("/checkout");
  }
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="bg-light py-2 bold rounded text-center">{price}</Card.Text>
        <Card.Text><BsFillCheckCircleFill/><span className='ps-2'>{steps.step1}</span></Card.Text>
        <Card.Text><BsFillCheckCircleFill/><span className='ps-2'>{steps.step2}</span></Card.Text>
        <Card.Text><BsFillCheckCircleFill/><span className='ps-2'>{steps.step3}</span></Card.Text>
        <Card.Text><BsFillCheckCircleFill/><span className='ps-2'>{steps.step4}</span></Card.Text>
      </Card.Body>
      <Card.Footer>
        <button onClick={handleBookNow} className=" btn btn-primary w-100">Book Now</button>
      </Card.Footer>
    </Card>
  );
};

export default Services;
