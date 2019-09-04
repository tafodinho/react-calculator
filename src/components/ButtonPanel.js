import React from 'react'
import Button from './Button'

const ButtonPanel = (props) => {

    return (
        <div className="button-panel">
            <div className="group-1">
                <Button name="AC" />
                <Button name="+/-" />
                <Button name="%" />
                <Button color="orange" name="/" />
            </div>
            <div className="group-2">
                <Button name="7" />
                <Button name="8" />
                <Button name="9" />
                <Button color="orange" name="X" />
            </div>
            <div className="group-3">
                <Button name="4" />
                <Button name="5" />
                <Button name="6" />
                <Button color="orange" name="-" />
            </div>
            <div className="group-4">
                <Button name="1" />
                <Button name="2" />
                <Button name="3" />
                <Button color="orange" name="+" />
            </div>
            <div className="group-5">
                <Button name="0" special={true}/>
                <Button name="." />
                <Button color="orange" name="=" />
            </div>
        </div>
    )
}

export default ButtonPanel