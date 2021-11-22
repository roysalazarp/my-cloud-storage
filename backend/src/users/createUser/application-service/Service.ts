import IService from './Service.interface';
import IDatabaseOperations from "./../../_shared/infrastructure/DatabaseOperations.interface";
import { v4 as uuidv4 } from 'uuid';
import { UserOutputDto } from "../../_shared/interfaces/Output.dto";

import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';
import { hash } from "bcryptjs";

export default class Service implements IService {
  private DatabaseOperations: IDatabaseOperations;

  constructor(
    DatabaseOperations: IDatabaseOperations,
  ) {
    this.DatabaseOperations = DatabaseOperations
  }

  public async createUser(
    args: InputDto,
  ): Promise<OutputDto> {

    const user = await this.findUserByEmail(args.email);

    if (user) {
      throw new Error("This account aready exists");
    }

    const hashedPassword = await hash(args.password, 12);

    const id = uuidv4();
    try {
      await this.register(id, args.email, hashedPassword)
    } catch (err) {
      console.log(err);
      throw new Error("something went wrong in creating the user account");
    }

    return {
      wasAccountCreated: true
    }
  }

  private async register (id: string, email: string, password: string): Promise<UserOutputDto> {
    const createUserInput = {
      table: "users" as const,
      args: {
        id: id,
        email: email,
        password: password,
      }
    }
    const createUserOutput = await this.DatabaseOperations.postgres.createUser.execute(createUserInput)

    return createUserOutput.user
  }

  private async findUserByEmail (email: string): Promise<UserOutputDto|null> {
    const findUserByEmailInput = {
      table: "users" as const,
      args: {
        email: email,
      }
    }
    const findUserByEmailOutput = await this.DatabaseOperations.postgres.findUserByEmail.execute(findUserByEmailInput)
    
    if (findUserByEmailOutput.user === null){
      return null
    } 

    return findUserByEmailOutput.user
  }

}