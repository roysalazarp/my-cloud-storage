import {UserOutputDto} from "../../_shared/interfaces/Output.dto";
import { MyContext } from "../../../lib/auth/MyContext";

export default interface IService {
  me: (context: MyContext) => Promise<UserOutputDto>;
}