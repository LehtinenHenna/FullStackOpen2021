import React, { useState } from 'react'
import {PersonForm, PersonsRender, Filter} from './components/Person.js'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  

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
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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
