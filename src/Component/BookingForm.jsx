

import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ searchState, selectedSeats }) {
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    alert("Your Ticket has been Successfully Booked");
    navigate("/");
  };

  return (
    <div className="text-align-center">
      <h5>
        {searchState.from} to {searchState.to} 
      </h5>
      <h5>Date: {searchState.date}</h5> 
      <br />

      {selectedSeats.map((seat, index) => (
        <div key={index}>
          <div className="my-3">Seat NO: {seat}</div>
          <Form.Group className="d-flex justify-content-center">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              className="ms-2 mb-3 width-300"
              placeholder="Name"
              type="text"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Form.Label>Age :</Form.Label>
            <Form.Control
              className="ms-2 mb-3 width-300"
              placeholder="Age"
              type="number"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              className="ms-2 mb-3 width-300"
              placeholder="Email"
              type="email"
            />
          </Form.Group>
        </div>
      ))}
      <Button variant="primary" onClick={handleFormSubmit}>
        Confirm Booking
      </Button>
    </div>
  );
}
