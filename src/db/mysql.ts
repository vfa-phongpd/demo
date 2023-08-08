import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV) {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
} else {
    dotenv.config();
}

const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_DATABASE,
    logger: 'debug',
    charset: 'utf8mb4',
    synchronize: false,
    entities: [path.join(__dirname, '../..', '/entities/*.entity{.ts,.js}')],
    // migrations: [path.join(__dirname, '../..', '/migration/*{.ts,.js}')],
    autoLoadEntities: true,
};
export default dbConfig;
