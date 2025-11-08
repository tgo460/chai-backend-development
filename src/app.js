import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// when the data is recieved from forms
app.use(express.json({limit: "16kb"}))

// When the data is recieved from the URL

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import

import userRouter from './routes/user.routes.js'

// route declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }