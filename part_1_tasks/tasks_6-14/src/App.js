import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <div>{text}: {value}</div>
)

const Statistics = ({averageList, good, all, neutral, bad}) => {
  // Calculating the average score of feedback by summing together elements from list average
  // and dividing the sum with the number of elements
  // (bad feedback adds -1 to the list, neutral adds 0 and good adds 1)
  const countAverage = () => {
    let averageSummed = 0;
    if (averageList.length > 0) {
      for (let i = 0; i < averageList.length; i++) {
        averageSummed += averageList[i];
      }
      return averageSummed / averageList.length
    }
    else {
      return 0
    }
  }
  // Calculating the percentage of positive feedback out of all feedback
  const countPositive = () => {
    if (all > 0) {
      return good / all * 100
    }
    else {
      return 0
    } 
  }
  // Displaying statistics on the screen
  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={countAverage()}/>
      <StatisticLine text="positive %" value={countPositive()}/>
    </div>
  )
}

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
  if (all > 0) {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
        <br></br>
        <h1>Statistics</h1>
        <Statistics averageList={average} good={good} all={all} bad={bad} neutral={neutral}/>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
        <br></br>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}


export default App