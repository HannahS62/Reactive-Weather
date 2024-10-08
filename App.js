import React, { useState } from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";
import cities from "./data";

function App() {
  const [location, setLocation] = useState("Berlin");

  function stateSetter() {
    setLocation(location);
  }

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <Form location={location} setLocation={setLocation} />
        {cities.map((cities, index) => (
          <WeatherCard cities={cities} key={`cities-${index}`} />
        ))}
        <Location stateSetter={stateSetter} data={cities} location={location} />
      </div>
    </>
  );
}

export default App;
