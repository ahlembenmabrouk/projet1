import express from "express"
import { signUp } from "./user.controllers.js"

const userRouter = express.Router()
userRouter.post('/signUp',signUp)
export default userRouter