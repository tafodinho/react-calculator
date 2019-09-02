import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => {
    return (
        <div className="display">
            <h1>{props.opp}</h1>
            <p>{props.result}</p>
        </div>
    )
}

Display.propTypes = {
    result: PropTypes.string.isRequired,
    opp: PropTypes.string.isRequired
}
export default Display