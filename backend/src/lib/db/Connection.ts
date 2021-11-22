import IDatabase from "./interfaces/Database.interface";
import IConnection from "./interfaces/Connection.interface";

export default class Connection<T> implements IConnection {
  private Database: IDatabase<T>;

  constructor(
    Database: IDatabase<T>,
  ){
    this.Database = Database
  }

  public connect() {
    return this.Database.makeConnection()
  }
}