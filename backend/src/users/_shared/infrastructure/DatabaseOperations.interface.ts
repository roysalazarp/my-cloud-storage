import {FindUserByEmail} from "./Postgres/FindUserByEmail";
import {CreateUser} from "./Postgres/CreateUser";
import {FindUserById} from "./Postgres/FindUserById";
import {FindAllUsers} from "./Postgres/FindAllUsers";

export default interface IDatabaseOperations {
  postgres?: {
    findUserByEmail?: FindUserByEmail;
    createUser?: CreateUser;
    findUserById?: FindUserById;
    findAllUsers?: FindAllUsers;
  },
}