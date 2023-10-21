import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const {isLoaded} = useLoadScript({googleMapsApiKey: API_KEY});

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Map />
    </div>
  );
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
      <div className="planner">
        <div className="caret">^</div>
      </div>
      <div className="result-bar">hi</div>
    </GoogleMap>
    
  );
}

// function Planner() {

// }


export default App;
