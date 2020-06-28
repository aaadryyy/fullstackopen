import React from 'react'

const Notification = ({message, type}) => {
    return(
        <p className={`msg ${type}`}>{message}</p>
    )
}

export default Notification