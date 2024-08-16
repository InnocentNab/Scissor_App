"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const requireAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const bearerToken = authorization.split(" ");
    if (bearerToken.length !== 2) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // console.log("Token", bearerToken[1]);
    jsonwebtoken_1.default.verify(bearerToken[1], JWT_SECRET, (err, decodedToken) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(decodedToken);
            next();
        }
    });
};
exports.default = requireAuth;
