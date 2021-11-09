import { useState, useEffect } from 'react'
import axios from 'axios'

// component rendering a country's name on the screen
const CountryRender = ({country}) => {
  return (
  <li>{country.name.common}</li>
  )
}



// component rendering a country's name, capital, population, languages and flag on the screen
const OneCountryRender = ({country}) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        Capital: {country.capital}
        <br></br>
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}>
            {language}
          </li>
        )}
      </ul>
      <img src={country.flags.png} alt='country flag'/>
    </div>  
  )
}



// searching for weather data from https://weatherstack.com/ and rendering that on the screen
const WeatherRender = ({country}) => {
  const [ weather, setWeather] = useState({})
  
  // fetch weather data according to current filtered country's capital
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then((response) => {
        setWeather(response.data)
      })
  }, [])  

  // without this check the program will try to render weather data before it has been fetched and throws an error
  if (Object.keys(weather).length !== 0) {
    return(
      <div>
        <h3>Weather in {country.capital}</h3>
        <p>
          <b>temperature:</b> 
          {weather.current.temperature} °C
        </p>
        <img src={weather.current.weather_icons[0]} alt='current weather'/>
        <p>
          <b>wind:</b> 
          {weather.current.wind_speed} mph 
          direction {weather.current.wind_dir}
        </p>
      </div>
    )
  } 
  else {
    return null
  }
}



// component rendering all countries on the screen that pass the filter
const CountriesRender = ({countries, filter, handleButtonClick}) => {

  //filteredCountries is a list of country objects that have the filter word included in the name
  const filteredCountries = countries.filter((country) => {
    // making the filter case-insensitive
    const upperFilter = filter.toUpperCase()
    const upperName = country.name.common.toUpperCase()
    return (
      upperName.includes(upperFilter)
    )
  })
  // if there's only one country to render, display extra information
  if (filteredCountries.length === 1) {
    return (
      <div>
        <OneCountryRender country={filteredCountries[0]}/>
        <WeatherRender country={filteredCountries[0]}/>
      </div>
    )
  }
  // render the country names on the screen if there's 10 or less countries to render
  // render also a button for each country that sets the filter as that country's name when clicked
  else if (filteredCountries.length <= 10) {
    return (
        <ul>
          {filteredCountries.map(country =>  
            <div key={country.name.common}> 
                <CountryRender country={country}/>
                <Button handler={handleButtonClick} country={country.name.common} text='show'/>
            </div>  
            )}
        </ul>
    )
  } else {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
}



// component creating an input field to filter results
const Filter = ({filter, handleFilterChange}) => {
  return (
    <div> 
      find countries  
      <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}


// component to create a button
const Button = ({handler, country, text}) => {
  return (
    <button onClick={() => handler(country)}>
      {text}
    </button>
  )
}

export {Filter, CountriesRender}