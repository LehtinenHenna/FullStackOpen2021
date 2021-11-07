import React from 'react'

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
  


// component rendering all countries on the screen that pass the filter
const CountriesRender = ({countries, filter}) => {

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
      <OneCountryRender country={filteredCountries[0]}/>
    )
  }
  // render the country names on the screen if there's 10 or less countries to render
  else if (filteredCountries.length <= 10) {
    return (
        <ul>
          {filteredCountries.map(country =>     
            <CountryRender key={country.name.common} country={country}/> )}
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



export {Filter, CountriesRender}