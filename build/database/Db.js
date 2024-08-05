"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseName = process.env.DATABASE_NAME;
const databaseUsername = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;
if (!databaseName || !databaseUsername || !databasePassword) {
    throw new Error('Database connection details are missing');
}
const sequelize = new sequelize_1.Sequelize(databaseName, databaseUsername, databasePassword, {
    host: "localhost",
    dialect: "postgres",
});
exports.default = sequelize;
