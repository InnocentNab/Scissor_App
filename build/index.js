"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Db_1 = __importDefault(require("./database/Db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Scissor URL shortening' });
});
app.get("*", (req, res) => {
    res.status(404).send({ error: "Route not found, please go to a valid route" });
});
Db_1.default.sync({})
    .then(() => {
    console.log("Database Snced");
})
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});
