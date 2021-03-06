import React from 'react'


const Header = ({header}) => {
    return(
      <>    
        <h2>
          {header}
        </h2>
      </>
    )
  }

  
const Part = ({part_name, exercises_amount}) => {
  return(
    <>
      <li>
        {part_name} {exercises_amount}
      </li>
    </>
  )
}
  
  
const Content = ({parts}) => {
  return(
    <>
      <ul>
        {parts.map(part => 
          <Part key={part.id} part_name={part.name} exercises_amount={part.exercises}/>
        )}
      </ul>
    </>
  )
}


const Total = ({ parts }) => {
  //Creating a list of just exercises with map() so it's easier to sum them up with reduce()
  const list_of_exercises = parts.map(part => part.exercises)
  const exercises_summed = list_of_exercises.reduce((total, amount) => total + amount)
  return(
    <>
      <p>Total of {exercises_summed} exercises</p>
    </>
  )
}


const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <div key={course.id}>
          <Header header={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>     
      )}
    </div>
  )
}

export default Course
