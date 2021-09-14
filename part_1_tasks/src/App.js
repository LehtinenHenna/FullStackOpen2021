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
      <p>
        {props.part1_name} {props.exercises1_amount}
      </p>
      <p>
        {props.part2_name} {props.exercises2_amount}
      </p>
      <p>
        {props.part3_name} {props.exercises3_amount}
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises_summed = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course_name={course}/>
      <Content 
      part1_name={part1} 
      part2_name={part2} 
      part3_name={part3}
      exercises1_amount={exercises1}
      exercises2_amount={exercises2}  
      exercises3_amount={exercises3} 
      />
      <Total total_sum={exercises_summed}/>
      
      
    </div>
  )
}

export default App