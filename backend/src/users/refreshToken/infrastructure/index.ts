import IDatabaseOperations from "../../_shared/infrastructure/DatabaseOperations.interface";
import FindUserById from "../../_shared/infrastructure/Postgres/FindUserById";

export const database: IDatabaseOperations =  {
  postgres: {
    findUserById: FindUserById,
  }
}

export default database;