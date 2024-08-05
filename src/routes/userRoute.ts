// import express from "express"
import { Router } from "express"
const userRouter = Router()
userRouter.get('/',(req,res)=>{
    res.send("Get All")
})
userRouter.post('/register',(req,res)=>{
    res.send("Registered")
})
userRouter.post('/login',(req,res)=>{
    res.send("Logged in")
})

export default userRouter