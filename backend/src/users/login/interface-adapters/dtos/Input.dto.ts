import { InputType, Field } from "type-graphql";

@InputType()
export default abstract class LoginInputDto {
  @Field()
  email: string;
  @Field()
  password: string;
}