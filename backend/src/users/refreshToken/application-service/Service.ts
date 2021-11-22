import IService from './Service.interface';
import IDatabaseOperations from "./../../_shared/infrastructure/DatabaseOperations.interface";
import { UserOutputDto } from "../../_shared/interfaces/Output.dto";
import OutputDto from '../interface-adapters/dtos/Output.dto';
import { MyContext } from "../../../lib/auth/MyContext";
import { verify } from "jsonwebtoken";
import { createRefreshToken, createAccessToken } from "../../../lib/auth/auth";
import { sendRefreshToken } from "../../../lib/auth/sendRefreshToken";


export default class Service implements IService {
  private DatabaseOperations: IDatabaseOperations;

  constructor(
    DatabaseOperations: IDatabaseOperations,
  ) {
    this.DatabaseOperations = DatabaseOperations
  }

  public async refreshToken(
    context: MyContext
  ): Promise<OutputDto> {
    
    const token = context.req.cookies.jid;
    
    if (!token) {
      const output = { ok: false, accessToken: "", user: null }
      return output;
    }
    
    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      const output = { ok: false, accessToken: "", user: null }
      return output;
    }
    
    const user = await this.findUserById(payload.userId as string)

    if (!user) {
      const output = { ok: false, accessToken: "", user: null }
      return output;
    }

    const accessToken = createRefreshToken(user)
    
    sendRefreshToken(context.res, accessToken);

    console.log(user)
    
    return { ok: true, accessToken: accessToken, user: user };
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