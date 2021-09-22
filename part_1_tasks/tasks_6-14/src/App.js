import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({text, counter}) => (
  <div>{text}: {counter}</div>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1) 
    setAll(all + 1)
    setAverage(average.concat(1))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average.concat(0))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average.concat(-1))
  }

  const countAverage = () => {
    let averageSummed = 0;
    if (average.length > 0) {
      for (let i = 0; i < average.length; i++) {
        averageSummed += average[i];
      }
      return averageSummed / average.length
    }
    else {
      return 0
    }
  }

  const countPositive = () => {
    if (all > 0) {
      return good / all * 100
    }
    else {
      return 0
    } 
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <br></br>
      <h1>Statistics</h1>
      <Display text='good' counter={good}/>
      <Display text='neutral' counter={neutral}/>
      <Display text='bad' counter={bad}/>
      <Display text='all' counter={all}/>
      <Display text='average' counter ={countAverage()}/>
      <Display text='positive %' counter={countPositive()}/>
    </div>
  )
}


export default App