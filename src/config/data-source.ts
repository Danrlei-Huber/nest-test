import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "../domain/entities/user/user"
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT || "5432");
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "username";
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
//const DB_TYPE = process.env.DB_TYPE || "postgres";
const DB_DATABASE = process.env.DB_DATABASE || "database";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: ["../migration/**/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
