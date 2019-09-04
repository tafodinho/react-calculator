// import Big from 'big'
const operate = (numberOne, numberTwo, operation) => {
    if(operation === '-') {
        return numberOne - numberTwo
    } else if ( operation === '+') {
        return numberOne - numberTwo
    } else if ( operation === '*') {
        return numberOne * numberTwo
    } else if ( operation === '+') {
        return numberOne - numberTwo
    } else if ( operation === '/') {
        return numberOne / numberTwo
    } else if ( operation === '%') {
        return numberOne % numberTwo
    } else {
        alert("Invalid operation")
    }
}

export default operate