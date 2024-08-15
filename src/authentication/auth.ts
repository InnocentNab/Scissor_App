import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET: any = process.env.JWT_SECRET;

const requireAuth = (req: any, res: any, next: any) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const bearerToken = authorization.split(" ");
    if (bearerToken.length !== 2) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // console.log("Token", bearerToken[1]);
    jwt.verify(bearerToken[1], JWT_SECRET, (err: any, decodedToken: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(decodedToken);
            next();
        }
    });
};
export default requireAuth

