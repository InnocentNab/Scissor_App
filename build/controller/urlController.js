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
exports.redirectUrl = exports.getAllUrl = exports.shortenUrl = void 0;
const urlModelMong_1 = __importDefault(require("../database/model/urlModelMong"));
const redis_1 = __importDefault(require("../integration/redis"));
const shortenUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl, shortUrl } = (req.body);
    if (!originalUrl) {
        throw new Error("Url must be provided");
    }
    try {
        let verified_alias = "";
        if (shortUrl) {
            const existingUrl = yield urlModelMong_1.default.findOne({ shortUrl });
            if (existingUrl) {
                throw new Error("Alias already exists");
            }
            verified_alias = shortUrl;
        }
        else {
            const getCustomUrl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'z', 'y', 'x', 'w', 's', 'r', 'q', 'p', 'o', 'n', 'm'];
            let custom_url = '';
            for (let i = 0; i < 5; i++) {
                custom_url += getCustomUrl[Math.floor(Math.random() * getCustomUrl.length)];
            }
            verified_alias = custom_url;
            console.log(verified_alias, originalUrl);
        }
        if (!verified_alias) {
            throw new Error("Failed to generate a valid short URL alias");
        }
        const newUrl = new urlModelMong_1.default({ shortUrl: verified_alias, originalUrl });
        yield newUrl.save();
        res.status(200).send(newUrl);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.shortenUrl = shortenUrl;
const getAllUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cachekey = "/URL";
    const data = yield redis_1.default.get(cachekey);
    if (data) {
        console.log("returning links from cache");
        return res.status(200).send({
            data: JSON.parse(data),
            error: false,
        });
    }
    console.log("returning data from database");
    const links = yield urlModelMong_1.default.find({});
    // set cache
    yield redis_1.default.setEx(cachekey, 10 * 60, JSON.stringify(links));
    res.status(200).send({
        AllPost: links,
    });
});
exports.getAllUrl = getAllUrl;
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortUrl } = req.body;
    // const { shortUrl } = req.params
    try {
        const urlRecord = yield urlModelMong_1.default.findOne({ shortUrl });
        console.log(urlRecord === null || urlRecord === void 0 ? void 0 : urlRecord.shortUrl);
        if (urlRecord) {
            return res.redirect(urlRecord.originalUrl);
        }
        else {
            return res.status(404).send('Short URL not found');
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
});
exports.redirectUrl = redirectUrl;
