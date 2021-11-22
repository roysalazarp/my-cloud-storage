import IService from './Service.interface';
import IDatabaseOperations from "./../../_shared/infrastructure/DatabaseOperations.interface";
import { UserOutputDto } from "../../_shared/interfaces/Output.dto";
import { MyContext } from "../../../lib/auth/MyContext";
import { verify } from "jsonwebtoken";


export default class Service implements IService {
  private DatabaseOperations: IDatabaseOperations;

  constructor(
    DatabaseOperations: IDatabaseOperations,
  ) {
    this.DatabaseOperations = DatabaseOperations
  }

  public async me(
    context: MyContext
  ): Promise<UserOutputDto> {
    const authorization = context.req.headers["authorization"];

    console.log(authorization)

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(" ")[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      const output = await this.findUserById(payload.userId);
      return output
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  private async findUserById (id: string): Promise<UserOutputDto> {
    const findUserByIdInput = {
      table: "users" as const,
      args: {
        id: id,
      }
    }
    const findUserByIdOutput = await this.DatabaseOperations.postgres.findUserById.execute(findUserByIdInput)
    if (findUserByIdOutput.user === null){
      return null
    } else {
      return findUserByIdOutput.user
    }
  }

}