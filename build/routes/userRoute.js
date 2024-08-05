"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express"
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => {
    res.send("Get All");
});
userRouter.post('/register', (req, res) => {
    res.send("Registered");
});
userRouter.post('/login', (req, res) => {
    res.send("Logged in");
});
