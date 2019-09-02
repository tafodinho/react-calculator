import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {name} = props
    return (
        <button className={!props.special ? "button" : "long-button"} style={{background: props.color}} onClick={() => props.clickHandler(name)}>
            {props.name}
        </button>
    )
}

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default Button