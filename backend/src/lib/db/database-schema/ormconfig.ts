import databaseConfig from "../config";
import { ConnectionOptions } from "typeorm";

console.log(databaseConfig)

export default {
  name: "default",
  type: "postgres",
  username: databaseConfig.username,
  password: databaseConfig.password,
  host: databaseConfig.host,
  database: databaseConfig.database,
  port: databaseConfig.port,
  synchronize: false,
  logging: !process.env.DB_NO_LOGS,
  entities: [
    __dirname + `/models/**/*.ts`
  ],
  migrations: [
    __dirname + `/migrations/**/*.ts`
  ],
  cli: {
    "entitiesDir": "src/lib/db/database-schema/models",
    "migrationsDir": "src/lib/db/database-schema/migrations",
  },
} as ConnectionOptions;