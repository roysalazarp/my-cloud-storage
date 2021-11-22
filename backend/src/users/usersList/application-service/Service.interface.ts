import OutputDto from '../interface-adapters/dtos/Output.dto';

export default interface IService {
  usersList: () => Promise<OutputDto[]>;
}