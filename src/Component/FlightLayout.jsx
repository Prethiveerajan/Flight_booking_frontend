
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Flights } from "../utils/index";

const TicketContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin: 1rem auto;
`;

const TicketItem = styled.li`
  list-style-type: none;
  margin: 0.5rem;
  padding: 1px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function FlightLayout({ selectedSeats, setSelectedSeats }) {
  const { id } = useParams();
  const selectedFlight = Flights.find((data) => data.id === parseInt(id));

  if (!selectedFlight) {
    return <div>Flight not found</div>;
  }

  const isSleeper = selectedFlight.flightType === "Business";
  const seatWidth = isSleeper ? "80px" : "25px";

  const generateSeats = (array, keyPrefix = "") =>
    array.map((seat, index) => (
      <TicketItem key={`${keyPrefix}-${index}`} style={{ width: seatWidth }}>
        {`${keyPrefix}${seat}`}
      </TicketItem>
    ));

  return (
    <Container>
      <h2>{selectedFlight.name}</h2>
      <h4>Tickets</h4>
      <h5>{selectedFlight.flightType}</h5>
      <TicketContainer>
        <div className="d-flex ms-2 align-items-center">
          <h6>Available -</h6>
          {selectedFlight.availableSeats.map((seat, index) => (
            <TicketItem key={index} style={{ width: seatWidth }}>
              {seat}
            </TicketItem>
          ))}
        </div>
        <div className="d-flex ms-2 align-items-center">
          <h6>Booked -</h6>
          <TicketItem style={{ width: seatWidth, background: "#b6b4b4" }}>
            {1}
          </TicketItem>
        </div>
        <div className="d-flex ms-2 align-items-center">
          <h6>Selected -</h6>
          <TicketItem style={{ width: seatWidth, background: "#318beb" }}>
            {1}
          </TicketItem>
        </div>
        <ul className="d-flex flex-wrap">
          {isSleeper ? (
            <>
              <TicketContainer className="d-flex align-items-center">
                <h6 className="p-3">Economy</h6>
                <div className="d-flex flex-wrap">
                  {selectedFlight.seatLayout?.economy?.first &&
                    generateSeats(selectedFlight.seatLayout.economy.first, "E")}
                </div>
                <div className="d-flex mt-4">
                  {selectedFlight.seatLayout?.economy?.second &&
                    generateSeats(selectedFlight.seatLayout.economy.second, "E")}
                </div>
              </TicketContainer>
            </>
          ) : (
            <></>
          )}
        </ul>
      </TicketContainer>
    </Container>
  );
}
































// import React from 'react';
// import { Container as BootstrapContainer } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import styled from "styled-components";
// import { Flights } from "../utils/index";

// const TicketContainer = styled.div`
//     background-color: #f0f0f0;
//     padding: 1rem;
//     border-radius: 5px;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//     width: 80%; /* Set to 80% of its parent container */
//     margin: 1rem auto 0 auto; /* Center the container and add margin-top */
// `;

// const TicketItem = styled.li`
//     list-style-type: none;
//     margin: 0.5rem;
//     padding: 1px;
//     background-color: white;
//     border-radius: 5px;
//     box-shadow: 0px 2px 8px 4px rgba(0, 0, 0, 0.1);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     text-align: center;
//     margin-left: auto; /* Aligns items to the right */
//     margin-right: auto; /* Aligns items to the left */
//     padding-left: 10px; /* Creates space from center */
//     padding-right: 10px;
// `;

// const StyledContainer = styled.div`
//     margin: 0;
// `;

// export default function FlightLayout({ selectedSeats, setSelectedSeats }) {
//     const { id } = useParams();

//     const selectedFlight = Flights.find((data) => data.id === parseInt(id));
//     const isSleeper = selectedFlight.flightType === 'Business';
//     const seatWidth = isSleeper ? '80px' : '25px';

//     return (
//         <BootstrapContainer>
//             <StyledContainer>
//                 <h2>{selectedFlight.name}</h2>
//                 <h4>Tickets</h4>
//                 <h5>{selectedFlight.flightType}</h5>
//                 <TicketContainer>
//                     <div className='d-flex ms-2 align-items-center'>
//                         <h6>Available -</h6>
//                         {selectedFlight.availableSeats.map((seat, index) => (
//                             <TicketItem key={index} style={{ width: seatWidth }}>
//                                 {seat}
//                             </TicketItem>
//                         ))}
//                     </div>
//                     <div className='d-flex ms-2 align-items-center'>
//                         <h6>Booked -</h6>
//                         <TicketItem style={{ width: seatWidth, background: '#b6b4b4' }}>
//                             {1}
//                         </TicketItem>
//                     </div>
//                     <div className='d-flex ms-2 align-items-center'>
//                         <h6>Selected -</h6>
//                         <TicketItem style={{ width: seatWidth, background: '#318beb' }}>
//                             {1}
//                         </TicketItem>
//                     </div>
//                 </TicketContainer>
//             </StyledContainer>
//         </BootstrapContainer>
//     );
// }

