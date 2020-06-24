import React from 'react'
import Part from './Part'

const Content = ({course}) => course.parts.map(part => <Part key={part.id} part={part} />)


export default Content