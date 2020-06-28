import React from "react"

const Weather = ({weather}) => ( 
  <>
    <p>
      <strong>temperature:</strong>{weather.temperature}°C
    </p>
    <img src={weather.weather_icons} alt=""/>
    <p>
      <strong>wind:</strong>{weather.wind_speed}mph direction {weather.wind_dir}
    </p>
  </>
)

export default Weather