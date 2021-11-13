import { Repository } from 'typeorm';
import User from '../domain/User';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';

@Provide()
export default abstract class UserRepository {
  @InjectEntityModel(User)
  _: Repository<User>;
}
