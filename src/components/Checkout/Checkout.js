import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const handleSubmitCheckout = (event)=>{
    event.preventDefault();
    toast("Thanks for Choosing Us");
  }
  return (
    <div>
      <Form onSubmit={handleSubmitCheckout} className="container my-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="Area, City, Country" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control required placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Khulna</option>
            <option>Sylhet</option>
            <option>Rajshahi</option>
            <option>Mymensingh</option>
            <option>Barisal</option>
            <option>Comilla</option>
            <option>Rangpur</option>
            <option>Narayanganj</option>
            <option>Gazipur</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required />
        </Form.Group>
      </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          Symptoms
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Couples Counselling"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Depression Treatment"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Anti-anxiety Treatments"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Relationship Problems"
              name="formHorizontalRadios"
              id="formHorizontalRadios4"
            />
            <Form.Check
              type="radio"
              label="Family Difficulties"
              name="formHorizontalRadios"
              id="formHorizontalRadios5"
            />
            <Form.Check
              type="radio"
              label="Personal Development"
              name="formHorizontalRadios"
              id="formHorizontalRadios6"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check required type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <ToastContainer/>
    </div>
  );
};

export default Checkout;
