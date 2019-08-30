import React from 'react'
import Button from './Button'

class ButtonPanel extends React.Component {
    handleClick = (btnName) => {
        return this.props.clickHandler(btnName)
    } 
    render() {
        return (
            <div className="button-panel">
                <div className="group-1">
                    <Button name="AC" clickHandler={this.handleClick}/>
                    <Button name="+/-" clickHandler={this.handleClick}/>
                    <Button name="%" clickHandler={this.handleClick}/>
                    <Button color="orange" name="/" clickHandler={this.handleClick}/>
                </div>
                <div className="group-2">
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button color="orange" name="*" clickHandler={this.handleClick}/>
                </div>
                <div className="group-3">
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button color="orange" name="-" clickHandler={this.handleClick}/>
                </div>
                <div className="group-4">
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button color="orange" name="+" clickHandler={this.handleClick}/>
                </div>
                <div className="group-5">
                    <Button name="0" special={true} clickHandler={this.handleClick}/>
                    <Button name="." clickHandler={this.handleClick}/>
                    <Button color="orange" name="=" clickHandler={this.handleClick} />
                </div>
            </div>
        )
    }
    
}

export default ButtonPanel