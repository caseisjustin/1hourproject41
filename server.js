import {app} from "./app.js"
import connectDB from "./utils/db.js"

connectDB()

const port = process.env.PORT
app.listen(port, err => {
    err ? console.log("Server couldn't ran") : 
    console.log("Server runing on port", port)
})