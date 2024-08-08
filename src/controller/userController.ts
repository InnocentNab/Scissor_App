import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import User from "../database/model/userModelMongo.ts"



export const register = async (req: any, res: any) => {
    const { email, password } = req.body
    const saltRounds = 10
    const user = await User.findOne({ email });
    // check if email exists
    if (user) {
        return res.status(550).send("User already exists")
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // create new user
    try {
        const NewUser = await User.create({
            email, password: hashedPassword
        })
        res.status(201).json({
            messsage: "User created",
            data: NewUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).send("Error Creating User, Please Try Again");
    }
}

export const login = async (req: any, res: any) => {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    // check if email exists
    if (!user) {
        return res.status(550).send("User not found!")
    }
    // Check if password is not correct
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).send("Email or Password is incorrect");
    }
    const JWT_SECRET = process.env.JWT_SECRET || "secret"
    const token = jwt.sign(
        {
            email: user.email,
            _id: user._id
        },
        JWT_SECRET
    );
    res.json({
        message: "Login successful",
        data: {
            accessToken: token,
        },
    });
}