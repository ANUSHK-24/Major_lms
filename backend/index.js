import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import authRouter from './route/authroute.js'
dotenv.config()
import cors from "cors"
import User from './model/userModel.js'
import userRouter from './route/userroute.js'
import courseRouter from './route/courseroute.js'
import paymentRouter from './route/paymentroute.js'
import reviewRouter from './route/reviewroute.js'
import aiRouter from './route/aiRoute.js'
const port=process.env.PORT
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/course",courseRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/review", reviewRouter)
app.use("/api/ai", aiRouter)

app.get("/",(req,res)=>{
    res.send("Hello from Server")
})
app.listen(port,()=>{
    console.log("Server started")
    connectDB()
})