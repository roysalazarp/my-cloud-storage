import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';
import { MyContext } from "../../../lib/auth/MyContext";

export default interface IService {
  login: (args: InputDto, context: MyContext) => Promise<OutputDto>;
}