import React from 'react'

// creating a form to post a new name and number to the phone book
const PersonForm = ({handleAddPerson, newName, newNumber, handleNameChange, handleNumberChange}) => { 
  return (
      <form onSubmit={handleAddPerson}>
          <div> name: <input value={newName} onChange={handleNameChange}/> </div>
          <div> number: <input value ={newNumber} onChange={handleNumberChange}/> </div>
          <div> <button type="submit">add</button> </div>
      </form>
  )
}
  
// rendering one person on the screen
const PersonRender = ({person, filter}) => {
// making the filtering case-insensitive
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
  
// rendering all persons on the screen
const PersonsRender = ({persons, filter}) => {
  return (
      <ul>
      {persons.map(person =>     
          <PersonRender key={person.name} person={person} filter={filter}/> )}
      </ul>
  )
}
  
// creating an input field to filter results
const Filter = ({filter, handleFilterChange}) => {
  return (
      <div> 
      filter shown with 
      <input value={filter} onChange={handleFilterChange}/>
      </div>
  )
}

export {Filter, PersonsRender, PersonForm}