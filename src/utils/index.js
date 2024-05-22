export const Flights = [
    {
      id: 1,
      name: "Air Chennai",
      source: "Chennai",
      destination: "Madurai",
      departureTime: "06:00 AM",
      arrivalTime: "07:30 AM",
      price: "₹3000",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Economy",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["E1", "E4", "B15", "F20"],
    },
    {
      id: 2,
      name: "Coimbatore Air",
      source: "Coimbatore",
      destination: "Chennai",
      departureTime: "07:30 AM",
      arrivalTime: "09:00 AM",
      price: "₹2800",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Business",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18, 19, 20],
        ],
        first: [
          [21, 22, 23, 24, 25, 26],
        ],
      },
      availableSeats: ["B14", "E7", "E9", "F25"],
    },
    {
      id: 3,
      name: "Trichy Skyways",
      source: "Trichy",
      destination: "Coimbatore",
      departureTime: "09:15 AM",
      arrivalTime: "10:45 AM",
      price: "₹3200",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "First Class",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["F19", "B17", "E10", "E11"],
    },
    {
      id: 4,
      name: "Madurai Airlines",
      source: "Madurai",
      destination: "Trichy",
      departureTime: "11:00 AM",
      arrivalTime: "12:30 PM",
      price: "₹3100",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Economy",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18, 19, 20],
        ],
        first: [
          [21, 22, 23, 24, 25, 26],
        ],
      },
      availableSeats: ["E3", "B15", "E8", "F21"],
    },
    {
      id: 5,
      name: "Salem Flights",
      source: "Salem",
      destination: "Chennai",
      departureTime: "08:45 AM",
      arrivalTime: "10:15 AM",
      price: "₹2900",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Business",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["B16", "E4", "F23", "E12"],
    },
    {
      id: 6,
      name: "Delhi Airline",
      source: "Delhi",
      destination: "Mumbai",
      departureTime: "09:00 AM",
      arrivalTime: "11:00 AM",
      price: "₹5000",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Business",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["B1", "B5", "B7", "F15"],
    },
    {
      id: 7,
      name: "Bangalore Express",
      source: "Bangalore",
      destination: "Chennai",
      departureTime: "10:00 AM",
      arrivalTime: "11:30 AM",
      price: "₹3500",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Economy",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["E1", "E4", "B15", "F20"],
    },
    {
      id: 8,
      name: "Madurai Airlines",
      source: "Madurai",
      destination: "Trichy",
      departureTime: "11:00 AM",
      arrivalTime: "12:30 PM",
      price: "₹3100",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Economy",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18, 19, 20],
        ],
        first: [
          [21, 22, 23, 24, 25, 26],
        ],
      },
      availableSeats: ["E3", "B15", "E8", "F21"],
    },
    {
      id: 9,
      name: "Trichy Skyways",
      source: "Trichy",
      destination: "Coimbatore",
      departureTime: "09:15 AM",
      arrivalTime: "10:45 AM",
      price: "₹3200",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "First Class",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18],
        ],
        first: [
          [19, 20, 21, 22, 23, 24],
        ],
      },
      availableSeats: ["F19", "B17", "E10", "E11"],
    },
    {
      id: 10,
      name: "Coimbatore Air",
      source: "Coimbatore",
      destination: "Chennai",
      departureTime: "07:30 AM",
      arrivalTime: "09:00 AM",
      price: "₹2800",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Business",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18, 19, 20],
        ],
        first: [
          [21, 22, 23, 24, 25, 26],
        ],
      },
      availableSeats: ["B14", "E7", "E9", "F25"],
    },
    {
      id: 11,
      name: "Coimbatore Air",
      source: "Coimbatore",
      destination: "Chennai",
      departureTime: "09:30 AM",
      arrivalTime: "1:30 PM",
      price: "₹1800",
      availableDates: ["2024-06-15", "2024-06-16", "2024-06-17", "2024-06-18"],
      flightType: "Economy",
      numberOfSeats: 60,
      seatLayout: {
        economy: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          // Add more rows as needed
        ],
        business: [
          [13, 14, 15, 16, 17, 18, 19, 20],
        ],
        first: [
          [21, 22, 23, 24, 25, 26],
        ],
      },
      availableSeats: ["B14", "E7", "E9", "F25"],
    },
  ];
  
  export const locations = [
    "Chennai",
    "Coimbatore",
    "Trichy",
    "Madurai",
    "Salem",
    "Delhi",
    "Bangalore",
    "Delhi",
    "Mumbai",
    "Kolkata"
  ];
  