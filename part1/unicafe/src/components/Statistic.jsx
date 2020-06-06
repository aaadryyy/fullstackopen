import React from 'react'

const Statistic = ({text, value}) => (
    <>
        <td>{text}</td> 
        <td>{value} {text === "positive" ? "%" : null}</td>
    </>
)


export default Statistic