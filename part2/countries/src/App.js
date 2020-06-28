import React, {useState} from 'react';
import CountryData from './components/CountryData'
import WeatherData from './components/WeatherData'
import axios from 'axios'

function App() {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  
  const [name, setName] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})

  const handleNameChange = (event) => {
    const inputValue = event.target.value
    setName(inputValue)
    axios
      .get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
      .then(response => {
        setCountries(response.data)
      })
  }

  const handleShow = (latlng) => {
    axios.get(`https://restcountries.eu/rest/v2/name/${latlng}`)
    .then(response => {
      setCountries(response.data)
      fetchWeather(response.data[0].capital)
    })
  }


  const fetchWeather = (capital) => {
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    .then(response => {
      console.log('response.data', response.data)
      setWeather(response.data.current)
    })
  }
  return (
    <>
      find countries <input type="text" value={name} onChange={handleNameChange}/>
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}

      {countries.length === 1 && (
        <>
         <CountryData country={countries[0]}/>
          {Object.keys(weather).length === 0 && weather.constructor === Object 
          ? <p>Loading...</p>
          :(
           <WeatherData weather={weather}/>
          )}
        </>
        
      )}

      {countries.length !== 1 && countries.length > 0 && countries.length <= 10 &&
        countries.map(
          country => (
            <div key={country.name}>
              <span key={country.name}>{country.name}</span>
              <button onClick={() => handleShow(country.name)}>Show</button>
            </div>
            )
        )}
      
    </>
  );
}

export default App;
