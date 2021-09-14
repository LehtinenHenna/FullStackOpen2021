import React from 'react'

const Header = (props) => {
  return(
    <>
      <h1>
        {props.course_name}
      </h1>
    </>
  )

}

const Content = (props) => {
  return(
    <>
      <Part part_name={props.part1_name} exercises_amount={props.exercises1_amount}/>
      <Part part_name={props.part2_name} exercises_amount={props.exercises2_amount}/>
      <Part part_name={props.part3_name} exercises_amount={props.exercises3_amount}/>
    </>
  )

}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part_name} {props.exercises_amount}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.total_sum}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const exercises_summed = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course_name={course}/>
      <Content 
      part1_name={part1.name} 
      part2_name={part2.name} 
      part3_name={part3.name}
      exercises1_amount={part1.exercises}
      exercises2_amount={part2.exercises}  
      exercises3_amount={part3.exercises} 
      />
      <Total total_sum={exercises_summed}/>
      
      
    </div>
  )
}

export default App