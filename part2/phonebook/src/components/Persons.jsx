import React from 'react'

const Persons = ({filteredPersons}) => (
    <>
        {filteredPersons.map(
            filteredPerson => <p key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</p>
        )}
    </>
)

export default Persons