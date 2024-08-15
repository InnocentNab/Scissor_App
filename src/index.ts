import express from "express";
import dotenv from "dotenv"
import client from "./integration/redis.ts"
import { connectDB } from "./database/dbMongo.ts";
import userRouter from "./routes/userRoute.ts"
import urlShortening from "./routes/scissorRoute.ts";
import { limiter } from "./rate-limiting/rate-limit.ts";

const app = express()
dotenv.config()
const port = process.env.PORT
app.use(express.json())

app.use(limiter)

app.get('/', (req: any, res: any) => {
    res.status(200).json({ message: 'Welcome to Scissor URL shortening' })
})
app.use('/', userRouter)
app.use('/', urlShortening)

app.get("*", (req: any, res: any) => {
    res.status(404).send({ error: "Route not found, please go to a valid route" })
})


client.connect()
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    })

})

