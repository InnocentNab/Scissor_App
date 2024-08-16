import { Router } from "express"
import authMiddleware from "../authentication/auth.ts"
import { registerValidation, ValidateUrl } from "../validation/validation.ts"
import { shortenUrl, getAllUrl, redirectUrl } from "../controller/urlController.ts"
const urlShortening = Router()


urlShortening.get('/getAllUrl', getAllUrl)
urlShortening.post('/shortLink', ValidateUrl, authMiddleware, shortenUrl)
urlShortening.get('/redirectUrl', redirectUrl)
export default urlShortening