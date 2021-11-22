import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default abstract class CreateUserOutputDto {
  @Field()
  wasAccountCreated: boolean;
}