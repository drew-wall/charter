import React, { useState, useEffect } from 'react'
import getWeather from '../apis/weather'

const Weather = ()  => {
  const [weather, setWeather] = useState({})
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    getWeather().then(setWeather)
  }, [refresh])

  const { temp_f, condition: { text, icon } = {}, wind_mph, wind_dir, feelslike_f, humidity } = weather.current || {}
  
  return (
    <>
    <h2>Weather for {weather.location && weather.location.name + ', ' + weather.location.region + ' at ' + weather.location.localtime}</h2>
    {weather.current &&
     <>
       <p>Temperature: {temp_f} F</p>
      <p>Condition: <span>{text}</span><span><img src={icon} alt=""/></span></p>
      <p>Wind: {wind_mph} mph {wind_dir}</p>
      <p>Feels Like: {feelslike_f} F</p>
      <p>Humidity: {humidity}%</p>
      <p>Dew Point: {temp_f - ((100 - humidity) / 5)} F</p>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
     </>
    }
    </>
  )
}

export default Weather