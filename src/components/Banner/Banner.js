import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./images/couple.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>There is always a better way</h3>
          <p>
            Create a life that looks good on the inside, not one thats looks on
            the outside
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./images/personal.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>There is always a better way</h3>
          <p>
            Create a life that looks good on the inside, not one thats looks on
            the outside
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/professional-help.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>There is always a better way</h3>
          <p>
            Create a life that looks good on the inside, not one thats looks on
            the outside
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
