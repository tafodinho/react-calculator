import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: null,
            next: null,
            operation: null,
            concat: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(btnName) {
        const nextState = calculate(this.state, btnName)

        this.setState(nextState)
    }
    render() {
        const result = this.state.next ? this.state.next : this.state.total
        const operation = this.state.operation
        return (
            <div id="app-container" className="app-container">
                <Display result={ result } opp={ operation }/>
                <ButtonPanel clickHandler={ this.handleClick } />  
            </div>
            
        )
    }
}

export default App