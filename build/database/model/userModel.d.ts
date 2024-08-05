import { Model } from "sequelize";
export declare class User extends Model {
}
export declare class userModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    number: number;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
}
