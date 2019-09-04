import React from 'react'

const Button = (props) => {
    return (
        <button className={!props.special ? "button" : "long-button"} style={{background: props.color}}>
            {props.name}
        </button>
    )
}

export default Button