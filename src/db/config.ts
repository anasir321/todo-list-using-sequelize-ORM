import { Sequelize } from 'sequelize-typescript';
import { Todos } from '../models/todos';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'todosdb',
    logging: false,
    models: [Todos]
})

export default connection;