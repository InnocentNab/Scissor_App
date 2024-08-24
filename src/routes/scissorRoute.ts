import { Router } from "express"
import authMiddleware from "../authentication/auth"
import { ValidateUrl } from "../validation/validation"
import { shortenUrl, getAllUrl, redirectUrl, getQrcode } from "../controller/urlController"
const urlShortening = Router()


urlShortening.get('/getAllUrl', getAllUrl)
urlShortening.post('/shortLink', ValidateUrl, authMiddleware, shortenUrl)
urlShortening.get('/redirectUrl', redirectUrl)
urlShortening.get('/qrCode', getQrcode)
export default urlShortening