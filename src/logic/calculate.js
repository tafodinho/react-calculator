import operate from './operate'

const calculate = (data, btnName) => {
    const operations = ['*', '/', '+', '-', '%']
    if(btnName === '=') {
        data.result = operate(data.total, data.next, data.operation)
        data.total = data.result
        data.next = null 
        data.operation = null
        data.concat = false
    } else if(btnName === '+/-') {
        data.total = data.total * -1
    } else if(btnName === 'AC') {
        data.total = null
        data.operation = null
        data.next = null
        data.result = null
    } else {
        if(operations.includes(btnName)) {
            if(data.total && data.next && data.operation) {
                data.total = operate(data.total, data.next, data.operation)
                data.next = null 
                data.operation = btnName
            } else if(data.total && !data.next && !data.operation) {
                data.operation = btnName
            }
            data.concat = true
        } else {
            if(data.total && data.operation) {
                if(data.next) {
                    data.next += btnName
                } else {
                    data.next = btnName
                }
            } else if(!data.operation) {
                if(data.total && data.concat) {
                    data.total += btnName
                } else {
                    data.total = btnName
                }
            }
            data.concat = true
        }
    }
    return data
} 

export default calculate