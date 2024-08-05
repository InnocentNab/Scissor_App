"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express"
const express_1 = require("express");
const ScissorRouter = (0, express_1.Router)();
ScissorRouter.get('/', (req, res) => {
    res.send("Get All links");
});
ScissorRouter.post('/shortLink', (req, res) => {
    res.send("short links");
});
