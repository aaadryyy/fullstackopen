import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filteredPersons, setFilteredPersons ] = useState(persons)
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }, [])

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumbChange = (e) => setNewNumber(e.target.value)
  const handleFilter = (e) => {
    const lowerCasedFilter = e.target.value.toLowerCase()
    setFilter(e.target.value)
    const newFilteredPersons = persons.filter(
      person => person.name.toLowerCase().includes(lowerCasedFilter)
    )
    setFilteredPersons(newFilteredPersons)
  }

  const addPerson = (e) => {
    e.preventDefault()
    
    if(persons.find(element => element.name === newName)) {
      alert(`${newName} is already added to phonebook`) 
    } else {
      const personObject= {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(personObject))
      setFilteredPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumbChange={handleNumbChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App