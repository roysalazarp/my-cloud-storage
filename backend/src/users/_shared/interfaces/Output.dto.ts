import { ObjectType, Field } from "type-graphql";

@ObjectType()
export abstract class UserOutputDto {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  updatedAt: string;
  @Field()
  createdAt: string;
}