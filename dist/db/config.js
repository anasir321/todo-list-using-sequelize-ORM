"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todos_1 = require("../models/todos");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'todosdb',
    logging: false,
    models: [todos_1.Todos]
});
exports.default = connection;
