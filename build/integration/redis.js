"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = (0, redis_1.createClient)({
    url: process.env.redisUri
});
client.on("connect", () => {
    console.log("connected to redis server successfully");
});
client.on("error", (error) => {
    console.log("Error " + error);
});
client.on('disconnect', (error) => {
    console.log("Error " + error);
});
exports.default = client;
