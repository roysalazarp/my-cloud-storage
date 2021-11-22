import IDatabaseOperations from "../../_shared/infrastructure/DatabaseOperations.interface";
import FindAllUsers from "../../_shared/infrastructure/Postgres/FindAllUsers";

export const database: IDatabaseOperations =  {
  postgres: {
    findAllUsers: FindAllUsers,
  }
}

export default database;