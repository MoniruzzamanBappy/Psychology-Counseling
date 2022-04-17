import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Treatment = ({treat}) => {
    const {name, img} = treat;
  return (
    <CardGroup className='text-center  gap-4'>
      <Card >
        <Card.Img className='mx-auto pt-2' style={{height: '120px', width: '120px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Treatment;
