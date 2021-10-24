import React, { useState } from 'react'

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
  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // check if the name already exist in the phone book
    if (persons.find(person => person.name === personObject.name)) {
      window.alert(`${newName} is already added to the phonebook.`)  
    }
    // check if the input phone number is really a number. Leaving the number blank is accepted. 
    else if (isNaN(personObject.number)) {
      window.alert(`${newNumber} is not a valid phone number.`)
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

  const Person = ({person, filter}) => {
    // Making the filtering case-insensitive
    const upperFilter = filter.toUpperCase()
    const upperName = person.name.toUpperCase()
    //return only the names that apply to the filter condition
    if (upperName.includes(upperFilter)) {
      return (
        <li>{person.name} {person.number}</li>
      )
    } else {
      return null
    }    
  }


  return (
    <div>
      <h2> Phonebook </h2>
      <div> filter shown with <input value={filter} onChange={handleFilterChange}/></div>
      <h2> Add a new </h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameChange}/> </div>
        <div> number: <input value ={newNumber} onChange={handleNumberChange}/> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2> Numbers </h2>
      <ul>
        {persons.map(person =>     
          <Person key={person.name} person={person} filter={filter}/> 
        )}
      </ul>   
    </div>
  )

}

export default App
