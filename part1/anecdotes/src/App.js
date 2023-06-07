import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  // const points = Array(anecdotes.length).fill(0)
  // const copy = [...points]
  // console.log(copy)

  const randomAnecdote = () => {
    const number = Math.floor(Math.random() * anecdotes.length)
    setSelected(number)
    console.log(number)
  } 

  const castVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(newVotes)
  }

  const mostPopular = () => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <>
      <div>
        <h1>Acnecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <Button action={castVote} text='vote' />
      <Button action={randomAnecdote} text='next anecdote' />
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[mostPopular()]}
      </div>
    </>
    
  )
}

const Button = (props) => ( <button onClick={props.action}>{props.text}</button> )

export default App
