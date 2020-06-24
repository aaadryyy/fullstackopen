import React from 'react'

const Total = ({course}) => {
    const {parts} = course
    const exercisesArr = parts.map(part => part.exercises)
    const total = exercisesArr.reduce((total, exercises ) => total + exercises)
    return (
        <p>
        <strong>Total of {total} exercises</strong>
        </p>
    )
}

export default Total