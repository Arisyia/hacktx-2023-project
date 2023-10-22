import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
  const [isExpanded, setIsExpanded] = useState(false);
  const [plannerChange, setPlannerChange] = useState(null);
  const [placesArr, setPlacesArr] = useState(["chick fil a", "burger king"]);


  const timer = ms => new Promise(res => setTimeout(res, ms));

  // useEffect(() => {
  //   createPlanner();
  // }, []);

  function handleClick(e) {
    setIsExpanded(!isExpanded);
    // console.log(isExpanded);
    // setPlannerChange(
    //   <div className={`planner ${!isExpanded ? 'expanded' : ''}`}>
    //     <div className="caret" onClick={handleClick}>^</div>
    //   </div>);
    // // if (isExpanded) {
    // //   setIsExpanded(false);
    // // } else {
    // //   setIsExpanded(true);
    // // }
    // console.log(isExpanded);
  }

  function createPlanner() {
    setPlannerChange(
      <div className={`planner ${isExpanded ? 'expanded' : ''}`}>
        <div className="caret" onClick={handleClick}>^</div>
      </div>);
  }

  function startSearch() {
    
  }


  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker id="markPos" key="markKey" position={{ lat: 44, lng: -80 }} />
        {/* <div className="plannerChange">{plannerChange}</div> */}
        setPlannerChange(
        <div className={`planner ${!isExpanded ? 'expanded' : ''}`}>
          <button onClick={() => startSearch()} className="give-result"></button>
          <div className="caret" onClick={handleClick}>^</div>
        </div>);
        <div className="result-bar">
          <div>{placesArr[0]}</div>
          <div className="result-note">locations</div>
          <div className="result-note">locations</div>
          <div>{placesArr[1]}</div>
          <div className="result-note">locations</div>
        </div>
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



export default App;
