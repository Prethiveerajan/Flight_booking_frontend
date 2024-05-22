


import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import FlightSearch from "./Component/FlightSearch";
import FlightsLayout from "./Component/FlightsLayout";
import BookingForm from "./Component/BookingForm";
import LoginComponent from "./Component/loginComponent";
import SignupComponent from "./Component/signupComponent";
import { locations } from "./utils/index";
import { AuthProvider, useAuth } from "./AuthContext";

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Prethivee | MERN TASK FOR PRESIDIO
              </Link>
              <div id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/flight-search">Flight Search</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
                <Route path="/flight-search" element={<PrivateRoute><FlightSearchWrapper searchState={searchState} setSearchState={setSearchState} /></PrivateRoute>} />
                <Route path="/flight-search/flight/:id" element={<PrivateRoute><FlightsLayout searchState={searchState} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} /></PrivateRoute>} />
                <Route path="/flight/book" element={<PrivateRoute><BookingForm searchState={searchState} selectedSeats={selectedSeats} /></PrivateRoute>} />
                <Route path="/" element={<LoginComponent />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function FlightSearchWrapper({ searchState, setSearchState }) {
  return (
    <>
      <Header />
      <FlightSearch searchState={searchState} setSearchState={setSearchState} />
    </>
  );
}

export default App;
