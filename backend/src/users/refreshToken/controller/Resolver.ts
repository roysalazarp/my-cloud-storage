import { Resolver as _Resolver, Query, Ctx } from 'type-graphql';
import OutputDto from '../interface-adapters/dtos/Output.dto';
import IService from "../application-service/Service.interface";
import { MyContext } from "../../../lib/auth/MyContext";
import { service } from "../index";

@_Resolver()
export default class Resolver implements IService {

  @Query(() => OutputDto)
  public async refreshToken(
    @Ctx() context: MyContext
  ): Promise<OutputDto> {
    const result = await service.refreshToken(context);
    return result
  }
}