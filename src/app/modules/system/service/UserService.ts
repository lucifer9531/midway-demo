import UserDTO from './dto/UserDTO';
import User from '../domain/User';

export default interface UserService {
  /**
   * 根据Id查询用户
   * @param id
   */
  getUserById(id: number): Promise<UserDTO>;

  /**
   * 创建用户
   * @param user
   */
  create(user: User): Promise<void>;
}
