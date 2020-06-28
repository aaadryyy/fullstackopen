import React, { useState, useEffect } from 'react'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from "./components/Notification"
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filteredPersons, setFilteredPersons ] = useState(persons)
  const [ filter, setFilter ] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [failMsg, setFailMsg] = useState('')

  useEffect(() => {
      personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredPersons(initialPersons)
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
      const [personToUpdate] = persons.filter(person => person.name === newName)
      const newPersonObject = {
        name: newName, 
        number: newNumber
      }
        if(window.confirm(`${newName} is already added to phonebook. Replace old number by the new one?`)){
          personService.editPerson(personToUpdate.id, newPersonObject)
          .then(editedPerson => {
            if(editedPerson === "error") {
              setFailMsg(`${newName} has already been deleted from the database`)
              setTimeout(() => { setFailMsg("")}, 3000)
            }else {
              const updatedPersons = persons.map(person => person.id !== editedPerson.id ? person : editedPerson)
              setPersons(updatedPersons)
              setFilteredPersons(updatedPersons)
              setNewName('')
              setNewNumber('')
              setSuccessMsg(`${editedPerson.name} succesfully updated`)
              setTimeout(() => { setSuccessMsg("")}, 3000)
            }
            
          })
        }
    } else {
      const personObject = {
        name: newName, 
        number: newNumber
      }
      personService.newPerson(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setFilteredPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setSuccessMsg(`${newPerson.name} succesfully added`)
        setTimeout(() => { setSuccessMsg("")}, 3000)
      })
    }
  }

  const deletePerson = (id) => {
    personService.deletePerson(id).then((response) => {
      const personToDelete = persons.filter(person => person.id === id)
      if(response === "error") {
        setFailMsg(`${personToDelete[0].name} has already been deleted from the database`)
        setTimeout(() => { setFailMsg("")}, 3000)
      } else {
        const filteredPerson = persons.filter(person => person.id !== id)
        setPersons(filteredPerson)
        setFilteredPersons(filteredPerson)
        setSuccessMsg(`${personToDelete[0].name} succesfully deleted`)
        setTimeout(() => { setSuccessMsg("")}, 3000)
      }
      
    })
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      { successMsg !== "" && <Notification message={successMsg} type={"success"}/> }
      { failMsg !== "" && <Notification message={failMsg} type={"fail"}/> }
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
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App