import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import {Filter, CountriesRender} from './components/Country.js'



const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries] = useState([])
  

  // handling the changes happening at the filter input field
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  const handleButtonClick = (country) => {
    setFilter(country)
  }

  // fetching data about countries and saving that data into the countries array
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <CountriesRender countries={countries} filter={filter} handleButtonClick={handleButtonClick}/>
    </div>
  );
}

export default App;

// You need an API key which you get by signing up in https://weatherstack.com/
// powershell command to start react server: ($env:REACT_APP_API_KEY = "{your API key}") -and (npm start)
// by using the above command the API key is accessable via process.env.REACT_APP_API_KEY
// which is saved in variable api_key in Country.js in component WeatherRender

