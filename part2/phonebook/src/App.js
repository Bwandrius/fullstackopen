import { useState } from 'react'
import PersonForm from './components/PersonForm'

const App = () => {
  const defaultPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const [persons, setPersons] = useState(defaultPersons) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [shownPersons, setShownPersons] = useState(defaultPersons)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (persons.find(person => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`)
    } else {
      const newPersons = persons.concat(personObject)
      setPersons(newPersons)
      setShownPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchInput(event.target.value)
    const searchValue = event.target.value.toLowerCase()
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue))
    setShownPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input type="text" value={searchInput} onChange={handleSearch}/>
      </div>
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      {shownPersons.map(person => 
        <p key={person.id}>{person.name} - {person.number}</p>  
      )}
    </div>
  )
}

export default App