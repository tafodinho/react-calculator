import Big from 'big-js'

const operate = (numberOne, numberTwo, operation) => {
    if(operation === '-') {
        return String(Big(numberOne).minus(numberTwo))
    } else if ( operation === '+') {
        return String(Big(numberOne).plus(numberTwo))
    } else if ( operation === '*') {
        return String(Big(numberOne).times(numberTwo))
    } else if ( operation === '/') {
        if(numberTwo === '0') {
            return "error division by zero"
        }
        return String(Big(numberOne).div(numberTwo))
    }  else {
        return "error"
    }
}

export default operate

