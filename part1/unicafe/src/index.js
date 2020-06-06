import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePrct, setPositivePrct] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
    setPositivePrct((good + 1) / (total + 1) * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setPositivePrct((good) / (total + 1) * 100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
    setPositivePrct((good) / (total + 1) * 100)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"}/>
      <Button handleClick={handleNeutralClick} text={"neutral"}/>
      <Button handleClick={handleBadClick} text={"bad"}/>
      <Statistics stats={{good, neutral, bad, total, average, positivePrct}}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)