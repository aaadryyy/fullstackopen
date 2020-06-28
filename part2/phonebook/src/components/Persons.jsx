import React from 'react'

const Persons = ({filteredPersons, deletePerson}) => (
    <>
        {filteredPersons.map(
            filteredPerson => (
                <p key={filteredPerson.id}>
                   <span>{filteredPerson.name} {filteredPerson.number} </span> 
                   <button onClick={() => deletePerson(filteredPerson.id)}>x</button>
                </p>
            )
        )}
    </>
)

export default Persons