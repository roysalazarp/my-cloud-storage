import { Resolver as _Resolver, Query, Ctx } from 'type-graphql';
import {UserOutputDto} from "../../_shared/interfaces/Output.dto";
import IService from "../application-service/Service.interface";
import { MyContext } from "../../../lib/auth/MyContext";
import { service } from "../index";

@_Resolver()
export default class Resolver implements IService {

  @Query(() => UserOutputDto, { nullable: true })
  public async me(
    @Ctx() context: MyContext
  ): Promise<UserOutputDto> {
    const result = await service.me(context);
    return result
  }
}