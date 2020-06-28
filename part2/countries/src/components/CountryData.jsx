import React from 'react'
import Weather from './WeatherData'

const Country = ({country}) => (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
      </ul>
      <img src={country.flag} alt="country flag" style={{width:"200px"}}/>
      <h2>Weather in {country.capital}</h2>
    </>
  
 )

export default Country