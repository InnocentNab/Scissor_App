import { Router } from "express"
import { register, login } from "../controller/userController"
import { registerValidation, ValidateUrl } from "../validation/validation"
const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.send("Get All")
})
userRouter.post('/register', registerValidation, register)
userRouter.post('/login', registerValidation, login)

export default userRouter