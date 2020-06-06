import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MostVoted from './components/MostVoted'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotedId, setMostVotedId] = useState(0)

  const handleNext = () => {
    const randomNumb = Math.random() * (anecdotes.length - 1)
    setSelected(Math.round(randomNumb))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
    const highestNumb = Math.max(...copy)
    setMostVotedId(copy.indexOf(highestNumb))
  }

  console.log(mostVotedId)

  return (
    <>
      <h1>Anecdote of the day</h1>
        <div>
          {props.anecdotes[selected]}
        </div>
        <p>has {votes[selected]} votes</p>
        <div>
          <button onClick={handleVote}>vote</button>
          <button onClick={handleNext}>next anecdote</button>
        </div>

      <MostVoted votes={votes} mostVotedId={mostVotedId} anecdotes={anecdotes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)