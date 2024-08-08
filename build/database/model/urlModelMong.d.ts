import mongoose from "mongoose";
interface IUrl {
    originalUrl: string;
    shortUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const Url: mongoose.Model<IUrl, {}, {}, {}, mongoose.Document<unknown, {}, IUrl> & IUrl & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<IUrl, mongoose.Model<IUrl, any, any, any, mongoose.Document<unknown, any, IUrl> & IUrl & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUrl, mongoose.Document<unknown, {}, mongoose.FlatRecord<IUrl>> & mongoose.FlatRecord<IUrl> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Url;
