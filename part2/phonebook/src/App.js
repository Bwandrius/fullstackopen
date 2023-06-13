import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: 869111111
    },
    { 
      name: 'Ada Lovelace',
      number: 869122222
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      // number: newNumber
    }
    if (persons.find(person => person.name === personObject.name)) {
      setNewName('')
      return alert(`${personObject.name} is already added to phonebook`)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newName} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name} - {person.number}</p>  
      )}
    </div>
  )
}

export default App