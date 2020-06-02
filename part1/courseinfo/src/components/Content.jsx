import React from 'react'
import Part from './Part'

const Content = ({parts, exercises}) => (
    <>
    <Part part={parts.part1} exercise={exercises.exercises1}/>
    <Part part={parts.part2} exercise={exercises.exercises2}/>
    <Part part={parts.part3} exercise={exercises.exercises3}/>
    </>
)

export default Content