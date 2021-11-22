import OutputDto from '../interface-adapters/dtos/Output.dto';
import InputDto from '../interface-adapters/dtos/Input.dto';

export default interface IService {
  createUser: (args: InputDto) => Promise<OutputDto>;
}