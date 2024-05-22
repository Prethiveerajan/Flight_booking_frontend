import React, { useState } from "react"; // Import useState
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { locations, Flights } from "../utils/index"; // Ensure Flights is imported
import "bootstrap/dist/css/bootstrap.min.css";
import FlightList from "./FlightList";

const Container = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function FlightSearch({ searchState, setSearchState }) {
  const [filteredFlight, setFilteredFlight] = useState(null); // Fix useState

  const handleSearch = () => {
    const filteredFlights = Flights.filter(
      (data) =>
        data.source === searchState.from &&
        data.destination === searchState.to &&
        data.availableDates.includes(searchState.date)
    );
    setFilteredFlight(filteredFlights);
  };

  return (
    <Container className="search-container width-1000">
      <h2 className="mb-3">Search for flights</h2>
      <div className="d-flex flex-column align-items-center">
        <Form.Select
          className="mb-3 width-300"
          value={searchState.from}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              from: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-source`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          className="mb-3 width-300"
          value={searchState.to}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              to: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-destination`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <input
          className="form-control mb-3 width-300"
          type="date"
          value={searchState.date}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
        <Button variant="primary" className="mb-3" onClick={handleSearch}>
          Search
        </Button>
        {filteredFlight && filteredFlight.length > 0 ? (
          <FlightList flights={filteredFlight} />
        ) : (
          filteredFlight !== null && <h3>No flights found</h3>
        )}
      </div>
    </Container>
  );
}
