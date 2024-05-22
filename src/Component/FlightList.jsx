
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FlightListContainer = styled.div`
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Add gap between flights */
`;

const FlightItem = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    flex: 0 1 calc(33.33% - 1rem); /* Adjust width for three columns with gap */
    display: flex;
    justify-content: space-between;
`;

const FlightDetails = styled.div`
    flex: 1;
`;

const FlightActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export default function FlightList({ flights }) {
    const navigate = useNavigate();
    
    return (
        <FlightListContainer>
            {flights.map((flight) => (
                <FlightItem key={flight.id}>
                    <FlightDetails>
                        <div>
                            <h3>{flight.name}</h3>
                            <p><strong>Source:</strong> {flight.source}</p>
                            <p><strong>Destination:</strong> {flight.destination}</p>
                            <p><strong>Departure:</strong> {flight.departureTime}</p>
                            <p><strong>Arrival:</strong> {flight.arrivalTime}</p>
                            <p><strong>Price:</strong> {flight.price}</p>
                            <p><strong>Type:</strong> {flight.flightType}</p>
                        </div>
                    </FlightDetails>
                    <FlightActions>
                        <Button variant="success" onClick={() => navigate(`flight/${flight.id}`)}>
                            Book Now
                        </Button>
                        <h5>Available Seats: {flight.availableSeats.length}</h5>
                    </FlightActions>
                </FlightItem>
            ))}
        </FlightListContainer>
    );
}


