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
      <Part part_name={props.parts_list[0].name} exercises_amount={props.parts_list[0].exercises}/>
      <Part part_name={props.parts_list[1].name} exercises_amount={props.parts_list[1].exercises}/>
      <Part part_name={props.parts_list[2].name} exercises_amount={props.parts_list[2].exercises}/>
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
  const exercises_summed = props.parts_list[0].exercises + props.parts_list[1].exercises + props.parts_list[2].exercises
  return(
    <>
      <p>Number of exercises {exercises_summed}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course_name={course}/>
      <Content parts_list={parts}/>
      <Total parts_list={parts}/>  
    </div>
  )
}

export default App