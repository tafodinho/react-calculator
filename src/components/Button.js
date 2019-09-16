import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {name, color, special, clickHandler} = props
    return (
        <button className={!special ? "button" : "long-button"} style={{background: color}} onClick={() => clickHandler(name)}>
            {props.name}
        </button>
    )
}

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default Button