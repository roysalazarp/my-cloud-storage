import IService from './Service.interface';
import IDatabaseOperations from "./../../_shared/infrastructure/DatabaseOperations.interface";
import { createRefreshToken, createAccessToken } from "../../../lib/auth/auth";
import { UserOutputDto } from "../../_shared/interfaces/Output.dto";
import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';
import { MyContext } from "../../../lib/auth/MyContext";
import { sendRefreshToken } from "../../../lib/auth/sendRefreshToken";
import { compare } from "bcryptjs";

export default class Service implements IService {
  private DatabaseOperations: IDatabaseOperations;

  constructor(
    DatabaseOperations: IDatabaseOperations,
  ) {
    this.DatabaseOperations = DatabaseOperations
  }

  public async login(
    args: InputDto,
    context: MyContext
  ): Promise<OutputDto> {
    const user = await this.findUserByEmail(args.email);

    if (!user) {
      throw new Error("could not find user");
    }

    const valid = await compare(args.password, user.password);

    if (!valid) {
      throw new Error("bad password");
    }

    const accessToken = createRefreshToken(user)

    sendRefreshToken(context.res, accessToken);

    return {
      accessToken: accessToken,
      user: user
    };
  }

  private async findUserByEmail (email: string): Promise<UserOutputDto> {
    const findUserByEmailInput = {
      table: "users" as const,
      args: {
        email: email,
      }
    }
    const findUserByEmailOutput = await this.DatabaseOperations.postgres.findUserByEmail.execute(findUserByEmailInput)
    return findUserByEmailOutput.user
  }

}