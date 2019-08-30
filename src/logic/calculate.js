import operate from './operate'

const calculate = (data, btnName) => {
    console.log(data)
    const operations = ['*', '/', '+', '-', '%']
    if(btnName === '=') {
        data.total = operate(data.total, data.next, data.operation)
        data.result = data.total
        data.next = null 
        data.operation = null
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
                data.result += btnName
                data.total = operate(data.total, data.next, data.operation)
                data.next = null 
                data.operation = btnName
            } else if(data.total && !data.next) {
                data.operation = btnName
                data.result += btnName
            }
        } else {
            if(data.total && data.operation) {
                if(data.next) {
                    data.next += btnName
                    data.result += btnName
                } else {
                    data.next = btnName
                    data.result += btnName
                }
            } else if(!data.operation) {
                if(data.total) {
                    data.total += btnName
                    data.result += btnName
                } else {
                    data.total = btnName
                    data.result = btnName
                }
            }
        }
    }
    return data
} 

export default calculate