import pg from "pg";
import databaseConfig from "../config";
import Postgres from './Postgres'

const postgres = new Postgres(pg, databaseConfig)

export default postgres;