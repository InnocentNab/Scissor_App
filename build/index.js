"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = __importDefault(require("./integration/redis"));
const dbMongo_1 = require("./database/dbMongo");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const scissorRoute_1 = __importDefault(require("./routes/scissorRoute"));
const rate_limit_1 = require("./rate-limiting/rate-limit");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(rate_limit_1.limiter);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Scissor URL shortening' });
});
app.use('/', userRoute_1.default);
app.use('/', scissorRoute_1.default);
app.get("*", (req, res) => {
    res.status(404).send({ error: "Route not found, please go to a valid route" });
});
redis_1.default.connect();
(0, dbMongo_1.connectDB)().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});
