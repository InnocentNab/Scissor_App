"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModelMongo_1 = __importDefault(require("../database/model/userModelMongo"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // console.log(email);
    const saltRounds = 10;
    const user = yield userModelMongo_1.default.findOne({ email });
    // check if email exists
    if (user) {
        return res.status(550).send("User already exists");
    }
    // hash password
    const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
    // create new user
    try {
        const NewUser = yield userModelMongo_1.default.create({
            email, password: hashedPassword
        });
        res.status(201).json({
            messsage: "User created",
            data: NewUser
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Error Creating User, Please Try Again");
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModelMongo_1.default.findOne({ email });
    // check if email exists
    if (!user) {
        return res.status(550).send("User not found!");
    }
    // Check if password is not correct
    if (!bcrypt_1.default.compareSync(password, user.password)) {
        return res.status(401).send("Email or Password is incorrect");
    }
    const JWT_SECRET = process.env.JWT_SECRET || "secret";
    const token = jsonwebtoken_1.default.sign({
        email: user.email,
        _id: user._id
    }, JWT_SECRET);
    res.json({
        message: "Login successful",
        data: {
            accessToken: token,
        },
    });
});
exports.login = login;
