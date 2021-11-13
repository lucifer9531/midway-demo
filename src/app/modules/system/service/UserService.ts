import UserDTO from './dto/UserDTO';

export default interface UserService {
  getUserById(id: number): Promise<UserDTO>;
}
