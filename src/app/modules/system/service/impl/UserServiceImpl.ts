import UserService from '../UserService';
import { Inject, Provide } from '@midwayjs/decorator';
import UserDTO from '../dto/UserDTO';
import UserRepository from '../../repository/UserRepository';

@Provide()
export default class UserServiceImpl implements UserService {
  @Inject()
  userRepository: UserRepository;

  async getUserById(id: number): Promise<UserDTO> {
    return await this.userRepository._.findOne(id);
  }
}
