//Task 1: App.jsx (Root Component)
import React from "react";
import Gallery from "../components.jsx/Gallery.jsx"; 
import "./App.css"; 

function App() {
  
  return (
    <div className="App">
      <h1><center>Tour Gallery</center></h1>
      <Gallery />  
    </div>
  );
}

export default App;
