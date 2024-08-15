import { Router } from "express"
import { register, login } from "../controller/userController.ts"
import { registerValidation, ValidateUrl } from "../validation/validation.ts"
const userRouter = Router()
userRouter.get('/', (req, res) => {
    res.send("Get All")
})
userRouter.post('/register', registerValidation, register)
userRouter.post('/login', login)

export default userRouter