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
exports.userModel = exports.User = void 0;
const sequelize_1 = require("sequelize");
const Db_1 = __importDefault(require("../Db"));
class User extends sequelize_1.Model {
}
exports.User = User;
class userModel {
}
exports.userModel = userModel;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'First name',
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Last name',
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Email',
    },
    number: {
        type: sequelize_1.DataTypes.NUMBER,
        field: 'number',
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        field: 'password',
    },
    deletedAt: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: Db_1.default,
    tableName: 'Users',
    modelName: 'UserModel',
    schema: 'operation',
    underscored: false,
    freezeTableName: true, // not pluralizes
});
(function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Db_1.default.sync({ force: true });
            const data = yield User.findAll();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            yield Db_1.default.close();
        }
    });
})();
