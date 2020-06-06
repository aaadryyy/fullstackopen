import React from 'react'

const MostVoted = ({votes, mostVotedId, anecdotes}) => {
    
    if(votes[mostVotedId] === 0 ) {
        return( 
        <>
            <h2>Anecdote with most votes</h2>
            <p>No vote yet</p>
        </>
        )
    } else {
        return(
            <>
                <h2>Anecdote with most votes</h2>
                <div>
                    {anecdotes[mostVotedId]}
                    <p>has {votes[mostVotedId]} votes</p>
                </div>
            </>
        )
    }
}

export default MostVoted