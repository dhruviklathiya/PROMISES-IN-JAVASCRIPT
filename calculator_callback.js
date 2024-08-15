// How function can be passed as argument to another function and can be used

const sum = (a, b) => {
    return a + b
}
const minus = (a, b) => {
    return a - b
}
const multiply = (a, b) => {
    return a * b
}
const division = (a, b) => {
    return a / b
}

const mycalculator = (operation, a, b) => {
    return operation(a, b)
}

console.log(mycalculator(sum, 100, 300))
console.log(mycalculator(minus, 100, 300))
console.log(mycalculator(multiply, 100, 300))
console.log(mycalculator(division, 100, 300))