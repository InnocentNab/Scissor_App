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
exports.ValidateUrl = exports.registerValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const registerValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            password: joi_1.default.string().min(8).required(),
            email: joi_1.default.string().email().required(),
        });
        yield schema.validateAsync(req.body);
        next();
    }
    catch (error) {
        return res.status(422).json({
            success: false,
            message: error.message,
        });
    }
});
exports.registerValidation = registerValidation;
const ValidateUrl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            originalUrl: joi_1.default.string().min(5).required().uri({ scheme: ["http", "https"] })
        });
        yield schema.validateAsync(req.body);
        next();
    }
    catch (error) {
        return res.status(422).json({
            status: error,
            message: "invalid url",
        });
    }
});
exports.ValidateUrl = ValidateUrl;
