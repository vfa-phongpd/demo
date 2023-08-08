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
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [path.join(__dirname, '../..', '/entities/*.entity{.ts,.js}')],
    // migrations: [path.join(__dirname, '../..', '/migration/*{.ts,.js}')],
    autoLoadEntities: true,
};
export default dbConfig;
