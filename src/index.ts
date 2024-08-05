import express from "express";
import dotenv from "dotenv"
// import sequelize from "./database/Db.ts";
import { connectDB } from "./database/dbMongo.ts";
import userRouter from "./routes/userRoute.ts"

const app = express()
dotenv.config()
const port = process.env.PORT
// console.log(port);

//  const MongoDB_URI = process.env.MongoDB_URI;
//  console.log(MongoDB_URI);
 

app.use(express.json())

app.get('/',(req:any, res:any)=>{
    res.status(200).json({message:'Welcome to Scissor URL shortening'})
})

app.get("*",(req:any,res:any)=>{
    res.status(404).send({error:"Route not found, please go to a valid route"})
})

connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
    })

})
