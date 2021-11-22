import IService from './Service.interface';
import IDatabaseOperations from "./../../_shared/infrastructure/DatabaseOperations.interface";
import OutputDto from '../interface-adapters/dtos/Output.dto';

export default class Service implements IService {
  private DatabaseOperations: IDatabaseOperations;

  constructor(
    DatabaseOperations: IDatabaseOperations,
  ) {
    this.DatabaseOperations = DatabaseOperations
  }

  public async usersList(): Promise<OutputDto[]> {
    const users = await this.findAllUsers();
    return users
  }

  private async findAllUsers (): Promise<OutputDto[]> {
    const findAllUserInput = {
      table: "users" as const,
    }
    const findAllUserOutput = await this.DatabaseOperations.postgres.findAllUsers.execute(findAllUserInput)
    return findAllUserOutput.users
  }

}