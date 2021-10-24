import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  

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
    else if (isNaN(personObject.number) ) {
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
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const Person = ({person}) => {
    return (
      <li>{person.name} {person.number}</li>
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div> number: <input value ={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person}/>  
        )}
      </ul>
      
    </div>
  )

}

export default App
