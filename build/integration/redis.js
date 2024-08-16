"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)({
    url: 'redis://127.0.0.1:6379',
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
