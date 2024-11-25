//Task 1: 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "../components.jsx/Gallery.jsx"; // Import the Gallery component
import Toolbar from "../components.jsx/Toolbar.jsx"; // Optional toolbar for navigation or branding
import "./App.css"; // Global styling

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Toolbar or Header */}
        <Toolbar title="Tour Gallery" />

        {/* Application Routes */}
        <Routes>
          {/* Main route rendering the Gallery component */}
          <Route path="/" element={<Gallery />} />
          {/* Additional routes can be added here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
