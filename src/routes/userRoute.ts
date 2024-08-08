import { Router } from "express"
import { register, login } from "../controller/userController.ts"
import { Validation } from "../validation/validation.ts"
const userRouter = Router()
userRouter.get('/', (req, res) => {
    res.send("Get All")
})
userRouter.post('/register', Validation, register)
userRouter.post('/login', Validation, login)

export default userRouter