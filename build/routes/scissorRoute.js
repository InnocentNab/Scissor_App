"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../authentication/auth"));
const validation_1 = require("../validation/validation");
const urlController_1 = require("../controller/urlController");
const urlShortening = (0, express_1.Router)();
urlShortening.get('/getAllUrl', urlController_1.getAllUrl);
urlShortening.post('/shortLink', validation_1.ValidateUrl, auth_1.default, urlController_1.shortenUrl);
urlShortening.get('/redirectUrl', urlController_1.redirectUrl);
exports.default = urlShortening;
