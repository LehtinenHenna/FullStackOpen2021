import React, { useState, useEffect } from 'react'
import {PersonForm, PersonsRender, Filter} from './components/Person.js'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  
  // fetching data from json server and saving that data to persons
  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
      })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // check if the name already exists in the phone book (case-insensitive)
    if (persons.find(person => person.name.toUpperCase() === personObject.name.toUpperCase())) {
      window.alert(`${newName} is already added to the phonebook.`)  
    }
    // check if the input phone number is really a number. Leaving the number blank is accepted. 
    else if (isNaN(personObject.number)) {
      window.alert(`${newNumber} is not a valid phone number.`)
    }
    // check that the name is not left blank
    else if (personObject.name === '') {
      window.alert(`Please add a name.`)
    }
    // if the person doesn't exist yet and the number is either a number or left blank let's add personObject to the phone book 
    else {
      personService
        .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          }) 
    } 
  }

  const handleNameChange = (event) => {
    // event.target.value contains whatever is written in the corresponding input box at the moment
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2> Phonebook </h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3> Add a new </h3>
      <PersonForm handleAddPerson={handleAddPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3> Numbers </h3>
      <PersonsRender persons={persons} filter={filter} />   
    </div>
  )
}


export default App

// start react app: npm start
// start json server: npm run server