// Method1:
const starting_function = (resolve) => {
    console.log("===> Starting function");
    setTimeout(() => {
        console.log("hi");
        resolve();  // Resolve the promise to continue the chain
    }, 1000);
};

const function_3s = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("hello");
            resolve();  // Resolve the promise to continue the chain
        }, 3000);
    });
};

const function_5s = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("hi there");
            resolve();  // Resolve the promise to continue the chain
        }, 5000);
    });
};

const another_function = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("END");
            resolve();  // Resolve the promise to finish the chain
        }, 7000);
    });
};

// Start the promise chain
new Promise(starting_function)
    .then(function_3s)
    .then(function_5s)
    .then(another_function);