"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const validation_1 = require("../validation/validation");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => {
    res.send("Get All");
});
userRouter.post('/register', validation_1.registerValidation, userController_1.register);
userRouter.post('/login', validation_1.registerValidation, userController_1.login);
exports.default = userRouter;
