import React from 'react'

const Display = (props) => {
    return (
        <div className="display">
            <h1>{props.opp}</h1>
            <p>{props.result}</p>
        </div>
    )
}

export default Display