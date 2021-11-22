import IDatabaseOperations from "../../_shared/infrastructure/DatabaseOperations.interface";
import CreateUser from "../../_shared/infrastructure/Postgres/CreateUser";
import FindUserByEmail from "../../_shared/infrastructure/Postgres/FindUserByEmail";

export const database: IDatabaseOperations =  {
  postgres: {
    createUser: CreateUser,
    findUserByEmail: FindUserByEmail,
  }
}

export default database;