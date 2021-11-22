import dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../../../../.env.${process.env.NODE_ENV}`
})

export interface IDatabaseConfig {
  username: string,
  password: string,
  host: string,
  database: string,
  port: number,
}

const databaseConfig: IDatabaseConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
}

export default databaseConfig;