// Twisted setTimeout_promisified

const setTimeout_promisified_2s = () => {
    return new Promise((resolve) => {
        console.log("Function 1 in chain")
        setTimeout(() => {
            console.log("Function 1 in chain")
            console.log("Hi");
            console.log("Logging from promisified setTimeout function 2 second")
            resolve()
        }, 5000) // Change 5000 to 2000 for normal understanding
    })
}



const setTimeout_promisified_3s = () => {
    return new Promise((resolve) => {
        console.log("Function 2 in chain")
        setTimeout(() => {
            console.log("Function 2 in chain")
            console.log("Logging from promisified setTimeout function 3 second")
            console.log("Hello");
            resolve()
        }, 3000)
    })
}

const setTimeout_promisified_5s = () => {
    return new Promise((resolve) => {
        console.log("Function 3 in chain")
        setTimeout(() => {
            console.log("Function 3 in chain")
            console.log("Logging from promisified setTimeout function 5 second")
            console.log("Hey there");
            resolve()
        }, 2000) // Change 2000 to 5000 for normal understanding
    })
}

const d = new Promise((resolve) => {
    console.log("start")
    resolve()
})

d.then(setTimeout_promisified_2s).then(setTimeout_promisified_3s).then(setTimeout_promisified_5s)

// Leraning: We must return Promise from chained function