const promisified_function = (time) => {
    console.log("Promise created")
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

const async_await_block = async () => {
    await promisified_function(1000)
    await promisified_function(3000)
    await promisified_function(5000)
}

async_await_block()