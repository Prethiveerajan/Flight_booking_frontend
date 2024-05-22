

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Flights } from "../utils/index";
import { Button } from "react-bootstrap";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const TicketContainer = styled.div`
  padding: 0.5rem;
`;

const TicketItem = styled.li`
  list-style-type: none;
  margin: 0.5rem;
  padding: 1px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default function FlightsLayout({ searchState, selectedSeats, setSelectedSeats }) { 
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedFlight = Flights.find((data) => data.id === parseInt(id));
  const isSleeper = selectedFlight.flightType === "Business";
  const seatWidth = isSleeper ? "80px" : "25px";

  const isSeatAvailable = (seat) => selectedFlight.availableSeats.includes(seat);

  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      const seats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat);
      setSelectedSeats(seats);
      return;
    }
    setSelectedSeats((prevState) => [...prevState, seat]);
  };

  const isSeatSelected = (seat) => selectedSeats.includes(seat);

  const generateSeats = (array, key = "") =>
    array.map((seats) =>
      Array.isArray(seats) ? (
        <div className="d-flex" key={key}>
          {seats.map((seat) => (
            <TicketItem
              style={{
                width: seatWidth,
                background: isSeatSelected(`${key}${seat}`)
                  ? "#318beb"
                  : isSeatAvailable(`${key}${seat}`)
                  ? "#fff"
                  : "#b6b4b4",
                cursor: isSeatAvailable(`${key}${seat}`) ? "pointer" : "",
              }}
              key={`${key}${seat}`}
              onClick={() => selectSeat(`${key}${seat}`)}
            >
              {key}
              {seat}
            </TicketItem>
          ))}
        </div>
      ) : (
        <TicketItem
          style={{
            width: seatWidth,
            background: isSeatSelected(`${key}${seats}`)
              ? "#318beb"
              : isSeatAvailable(`${key}${seats}`)
              ? "#fff"
              : "#b6b4b4",
            cursor: isSeatAvailable(`${key}${seats}`) ? "pointer" : "",
          }}
          key={`${key}${seats}`}
          onClick={() => selectSeat(`${key}${seats}`)}
        >
          {key} {seats}
        </TicketItem>
      )
    );

  return (
    <Container>
      <h2>{selectedFlight.name}</h2>
      <h4>Tickets</h4>
      <h5>{selectedFlight.flightType}</h5>
      <div className="d-flex">
        <div className="d-flex ms-2 align-items-center">
          <h6>Available - </h6>
          <TicketItem style={{ width: seatWidth }}>{1}</TicketItem>
        </div>
        <div className="d-flex ms-2 align-items-center">
          <h6>Booked - </h6>
          <TicketItem style={{ width: seatWidth, background: "#b6b4b4" }}>
            {1}
          </TicketItem>
        </div>
        <div className="d-flex ms-2 align-items-center">
          <h6>Selected- </h6>
          <TicketItem style={{ width: seatWidth, background: "#318beb" }}>
            {1}
          </TicketItem>
        </div>
      </div>
      <ul className="d-flex flex-wrap">
        {isSleeper ? (
          <>
            <TicketContainer className="d-flex align-items-center">
              <h6 className="p-3"> Economy Class</h6>
              <div className="d-flex flex-wrap">
                {generateSeats(selectedFlight.seatLayout.economy, "E")}
              </div>
            </TicketContainer>
            <TicketContainer className="d-flex align-items-center">
              <h6 className="p-3">First Class</h6>
              <div className="d-flex flex-wrap">
                {generateSeats(selectedFlight.seatLayout.first, "F")}
              </div>
            </TicketContainer>
            <TicketContainer className="d-flex align-items-center">
              <h6 className="p-3">Business Class</h6>
              <div className="d-flex flex-wrap">
                {generateSeats(selectedFlight.seatLayout.business, "B")}
              </div>
            </TicketContainer>
          </>
        ) : (
          <></>
        )}
      </ul>
      <div className="d-flex justify-content-center">
        {selectedSeats?.length > 0 && (
          <h4> selected seats - {selectedSeats.join(",")}</h4>
        )}
      </div>
      <div>
        <Button
          className="ms-3"
          variant="success"
          onClick={() => navigate("/flight/book")}
          disabled={!(selectedSeats && selectedSeats?.length > 0)}
        >
          BOOK NOW
        </Button>
      </div>
    </Container>
  );
}
