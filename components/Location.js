import React from "react";
import WeatherCard from "./WeatherCard";

function Location({ data, location, setLocation }) {
  const city = data.find((city) => city.city === location);
  return <WeatherCard cities={city} />;
}
export default Location;
