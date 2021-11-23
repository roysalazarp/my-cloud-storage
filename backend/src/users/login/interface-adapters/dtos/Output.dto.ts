import { ObjectType, Field } from "type-graphql";
import {UserOutputDto} from "../../../_shared/interfaces/Output.dto";

@ObjectType()
export default abstract class LoginOutputDto {
  @Field()
  user: UserOutputDto;
}