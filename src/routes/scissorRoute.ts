import { Router } from "express"
import authMiddleware from "../authentication/auth.ts"
import { Validation } from "../validation/validation.ts"
import { shortUrl } from "../controller/urlController.ts"
const ScissorRouter = Router()

ScissorRouter.get('/', (req, res) => {
    res.send("Get All links")
})
ScissorRouter.post('/shortLink', authMiddleware, Validation, shortUrl)

export default ScissorRouter