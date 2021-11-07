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
      <CountriesRender countries={countries} filter={filter}/>
    </div>
  );
}

export default App;

