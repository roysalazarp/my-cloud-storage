import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default abstract class MeOutputDto {
  @Field()
  id: string;
  @Field()
  email: string;
}