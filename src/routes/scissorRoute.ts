// import express from "express"
import { Router } from "express"
const ScissorRouter = Router()

ScissorRouter.get('/',(req,res)=>{
    res.send("Get All links")
})
ScissorRouter.post('/shortLink',(req,res)=>{
    res.send("short links")
})
