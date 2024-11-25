//Task 1: App.jsx (Root Component)
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "../components.jsx/Gallery.jsx"; // Import the Gallery Component
// Toolbar from "../components.jsx/Toolbar.jsx"; 
import "./App.css"; // Global styling

//const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         {/* Toolbar or Header */}
//         <Toolbar title="Tour Gallery" />

//         {/* Application Routes */}
//         <Routes>
//           {/* Main route rendering the Gallery component */}
//           <Route path="/" element={<Gallery />} />
//           {/* Additional routes can be added here if needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };
function App() {
  
  return (
    <div className="App">
      <h1><center>Tour Gallery</center></h1>
      <Gallery />  
    </div>
  );
}

export default App;
