import { Resolver as _Resolver, Mutation, Query, Arg } from 'type-graphql';
import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';
import IService from "../application-service/Service.interface";

import { service } from "../index";

@_Resolver()
export default class Resolver implements IService {
  
  @Query(() => String)
  public hello(): string {
    return '500';
  }

  @Mutation(() => OutputDto)
  public async createUser(
    @Arg('args', () => InputDto)
    args: InputDto
  ): Promise<OutputDto> {
    const result = await service.createUser(args);
    return result
  }
}