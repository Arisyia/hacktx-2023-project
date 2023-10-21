import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './App.css';
import React, { useState } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const {isLoaded} = useLoadScript({googleMapsApiKey: API_KEY});
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  }


  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80}), []);
  
    return( 
      <GoogleMap 
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker id="markPos" key="markKey" position={{lat: 44, lng: -80}} />
        <div className={`planner ${isExpanded ? 'expanded' : ''}`}>
          <div className="caret" onClick={handleClick}>^</div>
        </div>
        <div className="result-bar">hi</div>
      </GoogleMap>
    );
  }
  
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Map />
    </div>
  );
}


// function Planner() {

// }


export default App;
