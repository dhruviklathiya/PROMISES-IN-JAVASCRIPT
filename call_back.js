setTimeout(
    () => {
        console.log("hi")
        setTimeout(() => {
            console.log("hello")
            setTimeout(() => {
                console.log("hello there")
            }, 5000)
        }, 3000)
    }
    , 1000)