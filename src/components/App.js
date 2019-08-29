import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
    render() {
        return (
            <div id="app-container" className="app-container">
                <Display result="0"/>
                <ButtonPanel  />  
            </div>
            
        )
    }
}

export default App