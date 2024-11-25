import React, { useState, useEffect } from "react";
import "../src/App.css"; // Import CSS for styling


const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
  const apiURL = 'https://www.course-api.com/react-tours-project';
  fetch( apiURL )
    .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       } 

    return response.json();
    }) .then( data => {
      setLoading( false );
      setTours( data );
    
  })  
  }, []);

 //Remove a tour from the list
  const handleRemoveTour = (id) => {
    setTours((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id ? { ...tour, notInterested: 1 } : tour
      )
    );
  };

  // Toggle "Read More" / "Show Less" for descriptions
  const toggleReadMore = (id) => {
    setTours((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id
          ? { ...tour, showFullDescription: !tour.showFullDescription }
           : tour
       )
     );
   };


  // Render loading or error states
  if (loading) {
   
    return <div className="loading">Loading tours...</div>;
  }


  if (error) {
    return <div className="error">Failed to load tours: {error}</div>;
  }


  // Render tours
  if (tours.length === 0) {
    return <div className="empty">No tours left! Refresh to try again.</div>;
  }


  function renderTour( tour ) {
    return(
    <div key={tour.id} className="tour-card">
    <img src={tour.image} alt={tour.name} className="tour-image" />
    <div className="tour-info">
      <h2>{tour.name}</h2>
      <h3>${tour.price}</h3>
      <p>
        {tour.showFullDescription
          ? tour.info  : `${tour.info.substring(0, 100)}...`}
          <button onClick={() => toggleReadMore(tour.id)}>
            {tour.showFullDescription ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="not-interested-btn"
          onClick={() => handleRemoveTour(tour.id)}
        >
          Not Interested
        </button>
       
        </div>
    </div>
    );
  }
  return (
    <div className="gallery">
      <h1>Our Tours</h1>
      <div className="tour-list">
       {
        tours.filter( tour => tour.notInterested !== 1).map(
              selTour => renderTour( selTour ))
        }
     
        </div>
      </div>
    );
  };


export default Gallery;



