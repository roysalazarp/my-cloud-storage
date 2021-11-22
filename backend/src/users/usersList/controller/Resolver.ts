import { Resolver as _Resolver, Query } from 'type-graphql';
import OutputDto from '../interface-adapters/dtos/Output.dto';
import IService from "../application-service/Service.interface";

import { service } from "../index";

@_Resolver()
export default class Resolver implements IService {

  @Query(() => [OutputDto])
  public async usersList(): Promise<OutputDto[]> {
    const result = await service.usersList();
    return result
  }
}