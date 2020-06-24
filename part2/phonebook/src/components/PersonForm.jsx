import React from 'react'

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumbChange}) => (
    <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange}/>
          <div>number: <input type='text' value={newNumber} onChange={handleNumbChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)

export default PersonForm