import IDatabaseOperations from "../../_shared/infrastructure/DatabaseOperations.interface";
import FindUserByEmail from "../../_shared/infrastructure/Postgres/FindUserByEmail";

export const database: IDatabaseOperations =  {
  postgres: {
    findUserByEmail: FindUserByEmail,
  }
}

export default database;