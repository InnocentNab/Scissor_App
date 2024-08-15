import mongoose from "mongoose";
interface IUser {
    email: string;
    password: string;
    updatedAt?: Date;
}
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default User;
