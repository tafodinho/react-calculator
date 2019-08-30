import React from 'react'

class Button extends React.Component {
    handleClick = (name) => {
        return this.props.clickHandler(name)
    }
    render() {
        const {name} = this.props
        return (
            <button className={!this.props.special ? "button" : "long-button"} style={{background: this.props.color}} onClick={() => this.handleClick( name)}>
                {this.props.name}
            </button>
        )
    }
    
}

export default Button