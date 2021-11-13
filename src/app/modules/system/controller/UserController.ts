import { Controller, Get, Inject, Param, Provide } from '@midwayjs/decorator';
import UserDTO from '../service/dto/UserDTO';
import { Context } from '@midwayjs/web';
import UserServiceImpl from '../service/impl/UserServiceImpl';

@Provide()
@Controller('/api')
export class UserController {
  @Inject()
  userService: UserServiceImpl;

  @Inject()
  ctx: Context;

  @Get('/user/:id')
  async getUserById(@Param() id: number): Promise<UserDTO> {
    const user = await this.userService.getUserById(id);
    return user;
  }
}
