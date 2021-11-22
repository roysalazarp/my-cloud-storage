import { InputType, Field } from "type-graphql";

@InputType()
export default abstract class CreateUserInputDto {
  @Field()
  email: string;
  @Field()
  password: string;
}