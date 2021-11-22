import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default abstract class UsersListOutputDto {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field({nullable: true})
  createdAt: string;

  @Field({nullable: true})
  updatedAt: string;
}