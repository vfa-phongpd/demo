import './src/vendors/boilerplate.polyfill';
import { DataSource } from 'typeorm';
require('dotenv').config();

export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['./src/entities/*.ts'],
    migrations: ['./src/migrations/*.ts'],
    subscribers: ['./src/subscriber/*.ts'],
});
