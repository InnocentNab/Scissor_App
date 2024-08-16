import { Router } from "express"
import authMiddleware from "../authentication/auth"
import { registerValidation, ValidateUrl } from "../validation/validation"
import { shortenUrl, getAllUrl, redirectUrl } from "../controller/urlController"
const urlShortening = Router()


urlShortening.get('/getAllUrl', getAllUrl)
urlShortening.post('/shortLink', ValidateUrl, authMiddleware, shortenUrl)
urlShortening.get('/redirectUrl', redirectUrl)
export default urlShortening