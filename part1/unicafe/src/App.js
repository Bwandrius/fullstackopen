import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log('good')
    setGood(good + 1)
  }

  const handleNeutral = () => {
    console.log('neutral')
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log('bad')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button  action={handleGood} text='good' />
      <Button  action={handleNeutral} text='neutral' />
      <Button action={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(2) || 0
  const positive = ((good / all) * 100).toFixed(2) || 0

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <StatisticLine text='good:' value={good} />
      <StatisticLine text='neutral:' value={neutral} />
      <StatisticLine text='bad:' value={bad} />
      <StatisticLine text='all:' value={all} />
      <StatisticLine text='average:' value={average} />
      <StatisticLine text='positive:' value={positive} />
    </>
  )
}

const StatisticLine = (props) => {
  return <p>{props.text} {props.value}</p>
}

export default App
