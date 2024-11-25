import React from "react";
import { Link } from "react-router-dom";
import "../src/App.css"; // Import CSS for styling

const Toolbar = ({ title }) => {
  return (
    <header className="toolbar">
      <div className="toolbar-container">
        {/* App Title or Branding */}
       <h1 className="toolbar-title">{title}</h1>

        {/* Navigation Links */}
        <nav className="toolbar-nav">
        </nav>
      </div>
    </header>
  );
};
      /* <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>*/

export default Toolbar;
