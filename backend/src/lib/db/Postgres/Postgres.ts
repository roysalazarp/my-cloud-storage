import IDatabase from "../interfaces/Database.interface";
import {IDatabaseConfig} from "../config";
import pg, {Pool} from "pg";

export default class Postgres implements IDatabase<Pool> {
  private postgresDependency: typeof pg;
  private databaseConfig: IDatabaseConfig;

  constructor(
    postgresDependency: typeof pg,
    databaseConfig: IDatabaseConfig
  ){
    this.postgresDependency = postgresDependency,
    this.databaseConfig = databaseConfig
  }

  public makeConnection() {
    const { Pool } = this.postgresDependency;
    const pool = new Pool(this.databaseConfig);
    return pool;
  }
}