import {
  ALL,
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Provide,
} from '@midwayjs/decorator';
import UserDTO from '../service/dto/UserDTO';
import { Context } from '@midwayjs/web';
import User from '../domain/User';
import UserService from '../service/UserService';

@Provide()
@Controller('/api')
export class UserController {
  @Inject('UserServiceImpl')
  userService: UserService;

  @Inject()
  ctx: Context;

  @Get('/user/:id')
  async getUserById(@Param() id: number): Promise<UserDTO> {
    const user = await this.userService.getUserById(id);
    return user;
  }

  @Post('/user/create')
  async create(@Body(ALL) user: User): Promise<void> {
    await this.userService.create(user);
  }
}
