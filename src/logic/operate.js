import Big from 'big-js'

const operate = (numberOne, numberTwo, operation) => {
    if(operation === '-') {
        return Big(numberOne).minus(numberTwo).c.join('')
    } else if ( operation === '+') {
        return Big(numberOne).plus(numberTwo).c.join('')
    } else if ( operation === '*') {
        return Big(numberOne).times(numberTwo).c.join('')
    } else if ( operation === '/') {
        return Big(numberOne).div(numberTwo).c.join('')
    } else if ( operation === '%') {
        return Big(numberOne).mod(numberTwo).c.join('')
    } else {
        return "error"
    }
}

export default operate

