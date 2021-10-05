import React, { useState } from 'react'

const Button = ({handler, text}) => {
  return (
  <button onClick={handler}>
    {text}
  </button>
  )
}

const AnecdoteWithMostVotes = ({points, anecdotes}) => {
  let maxNumber = 0
  let index = 0

  // let's find the index of the biggest number in points array.
  // the same index points to the anecdote with most votes in anecdotes array.
  for (let i = 0; i < points.length; i++) {
    if (points[i] > maxNumber) {
      maxNumber = points[i]
      index = i
    }
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)) // creating an array filled with zeros to store vote points for each anecdote index

  const randomButtonHandler = () => {
    const random = Math.random() // gives a random decimal number between 0 and 1
    const chosenNumber = Math.floor(random * anecdotes.length) // picks a random integer between 0 and anecdotes.length
    setSelected(chosenNumber)
  }
  const voteButtonHandler = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy) // increment the vote points number at the index of the current anecdote by one
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handler={voteButtonHandler} text="vote"/>
      <Button handler={randomButtonHandler} text="next anecdote"/>
      <AnecdoteWithMostVotes points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App