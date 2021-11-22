import { ObjectType, Field } from "type-graphql";
import { UserOutputDto } from "../../../_shared/interfaces/Output.dto";

@ObjectType()
export default abstract class RefreshTokenOutputDto {
  @Field()
  ok: boolean;
  @Field()
  accessToken: string;
  @Field()
  user: UserOutputDto | null;
}