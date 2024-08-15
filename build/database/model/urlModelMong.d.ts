import mongoose from "mongoose";
interface IUrl {
    originalUrl: string;
    shortUrl: string;
    alias: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const Url: mongoose.Model<IUrl, {}, {}, {}, mongoose.Document<unknown, {}, IUrl> & IUrl & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default Url;
