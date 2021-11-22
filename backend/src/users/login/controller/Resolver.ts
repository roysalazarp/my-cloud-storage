import { Resolver as _Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';
import IService from "../application-service/Service.interface";
import { MyContext } from "../../../lib/auth/MyContext";

import { service } from "../index";

@_Resolver()
export default class Resolver implements IService {

  @Mutation(() => OutputDto)
  public async login(
    @Arg('args', () => InputDto) args: InputDto,
    @Ctx() context: MyContext
  ): Promise<OutputDto> {
    const result = await service.login(args, context);
    return result
  }
}