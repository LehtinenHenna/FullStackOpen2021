import React from 'react'


const Header = ({header}) => {
    return(
      <>    
        <h1>
          {header}
        </h1>
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


const Part = ({part_name, exercises_amount}) => {
  return(
    <>
      <li>
        {part_name} {exercises_amount}
      </li>
    </>
  )
}


/*
const Total = (props) => {
  const exercises_summed = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return(
    <>
      <p>Number of exercises {exercises_summed}</p>
    </>
  )
}
*/

const Course= ({ course }) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

export default Course