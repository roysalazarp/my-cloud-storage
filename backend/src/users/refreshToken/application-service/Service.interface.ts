import OutputDto from '../interface-adapters/dtos/Output.dto';
import { MyContext } from "../../../lib/auth/MyContext";

export default interface IService {
  refreshToken: (context: MyContext) => Promise<OutputDto>;
}