import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const ButtonPanel = (props) => {
        return (
            <div className="button-panel">
                <div className="group-1">
                    <Button name="AC" clickHandler={props.clickHandler}/>
                    <Button name="+/-" clickHandler={props.clickHandler}/>
                    <Button name="%" clickHandler={props.clickHandler}/>
                    <Button color="orange" name="/" clickHandler={props.clickHandler}/>
                </div>
                <div className="group-2">
                    <Button name="7" clickHandler={props.clickHandler}/>
                    <Button name="8" clickHandler={props.clickHandler}/>
                    <Button name="9" clickHandler={props.clickHandler}/>
                    <Button color="orange" name="*" clickHandler={props.clickHandler}/>
                </div>
                <div className="group-3">
                    <Button name="4" clickHandler={props.clickHandler}/>
                    <Button name="5" clickHandler={props.clickHandler}/>
                    <Button name="6" clickHandler={props.clickHandler}/>
                    <Button color="orange" name="-" clickHandler={props.clickHandler}/>
                </div>
                <div className="group-4">
                    <Button name="1" clickHandler={props.clickHandler}/>
                    <Button name="2" clickHandler={props.clickHandler}/>
                    <Button name="3" clickHandler={props.clickHandler}/>
                    <Button color="orange" name="+" clickHandler={props.clickHandler}/>
                </div>
                <div className="group-5">
                    <Button name="0" special={true} clickHandler={props.clickHandler}/>
                    <Button name="." clickHandler={props.clickHandler}/>
                    <Button color="orange" name="=" clickHandler={props.clickHandler} />
                </div>
            </div>
        )
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func.isRequired
}
export default ButtonPanel