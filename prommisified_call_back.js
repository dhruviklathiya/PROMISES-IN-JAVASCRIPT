// Assignment

const starting_function = (next_argument_from_chain) => {
    console.log("===> Starting function")
    setTimeout(() => {
        console.log("hi")
        next_argument_from_chain()
    }, 1000)
}

const function_3s = (next_argument_from_chain) => {
    setTimeout(() => {
        console.log("hello")
        next_argument_from_chain
    }, 3000)
}
const function_5s = () => {
    return (setTimeout(() => { console.log("hi there") }, 5000))
}


const d = new Promise(starting_function)
d.then(function_3s).then(function_5s) // Considering this as chain