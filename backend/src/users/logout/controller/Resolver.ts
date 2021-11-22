import { Resolver as _Resolver, Mutation, Ctx } from 'type-graphql';
import { MyContext } from "../../../lib/auth/MyContext";
import { sendRefreshToken } from "../../../lib/auth/sendRefreshToken";

@_Resolver()
export default class Resolver {

  @Mutation(() => Boolean)
  public async logout(@Ctx() { res }: MyContext) {
    sendRefreshToken(res, "");

    return true;
  }
}