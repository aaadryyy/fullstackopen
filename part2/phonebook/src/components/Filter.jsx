import React from 'react'

const Filter = ({filter, handleFilter}) => (
    <div>
        filter shown with <input type="text" value={filter} onChange={handleFilter}/>
    </div>
)

export default Filter