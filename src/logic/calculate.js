import operate from './operate'

const calculate = (data, btnName) => {
    if(btnName === '+/-') {
        data.result *= -1
    } else if(btnName === 'AC') {
        data.result = 0
    } else {
        data.result = operate(data.total, data.next, data.operation)
    }
} 

export default calculate