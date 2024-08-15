import { Router } from "express"
import authMiddleware from "../authentication/auth.ts"
import { registerValidation, ValidateUrl } from "../validation/validation.ts"
import { shortenUrl, getAllUrl } from "../controller/urlController.ts"
const urlShortening = Router()


urlShortening.get('/getAllUrl', getAllUrl)
urlShortening.post('/shortLink', ValidateUrl, shortenUrl)
// urlShortening.post('/shortLink', ValidateUrl, authMiddleware, shortenUrl)

export default urlShortening