import express from "express"
import { googleAuth, login, logout, resetPassword, sendOtp, signUp, verifyOtp } from "../controller/authcontroller.js"

const authRouter=express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.get("/logout",logout)
authRouter.post("/sendotp",sendOtp)
authRouter.post("/verifyotp",verifyOtp)
authRouter.post("/resetpassword",resetPassword)
authRouter.post("/googleauth",googleAuth)

export default authRouter