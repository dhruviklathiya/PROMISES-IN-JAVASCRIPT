const axios = require("axios")

const get_data = async () => {
    const result = await axios.get("https://dummyjson.com/todos")
    console.log(result.data.todos)
}

get_data()