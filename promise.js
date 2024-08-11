const passed_to_promise_object = (whatever_argument) => {
    setTimeout(whatever_argument, 3000)
    // or uncomment this
    // return setTimeout(whatever_argument, 3000)
}

const send_execution_here_after_our_whatever_argument_is_called = () => {
    console.log("End of process")
}

let d = new Promise(passed_to_promise_object)
console.log(d)

d.then(send_execution_here_after_our_whatever_argument_is_called)


// Visaulise this
//                                IMAGINE THIS AS PROXY
//                                    ||
//                                    ||
//                                    ||
// const passed_to_promise_object = .then(whatever_argument) => {
//     return setTimeout(whatever_argument, 3000)
// }

// const send_execution_here_after_our_whatever_argument_is_called = () => {
//     console.log("End of process")
// }

// let d = new Promise(passed_to_promise_object)
// console.log(d)

// d.then(send_execution_here_after_our_whatever_argument_is_called)
//    ||
//    ||
//    ||
//    ||
//   AFTER OUR passed_to_promise_object is done with execution it will trigger function passed in d.then(send_execution_here_after_our_whatever_argument_is_called)