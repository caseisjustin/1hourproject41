import express from "express"
import dotenv from "dotenv"
import mainRouter from "./routes/index.router.js"
dotenv.config()

const app = express()

app.use(express.json())

app.use("/", mainRouter)

export {app};