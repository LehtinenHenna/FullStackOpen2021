import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    // check if the name already exist in the phone book
    if (persons.find(person => person.name === personObject.name)) {
      window.alert(`${newName} is already added to the phonebook.`)  
    } else {
      // if the name doesn't exist yet let's add it to the phone book 
      setPersons(persons.concat(personObject))
      setNewName('')
    }

    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({person}) => {
    return (
      <li>{person.name}</li>
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
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
