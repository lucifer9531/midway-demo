import BaseEntity from '../../../common/BaseEntity';
import { Column } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';

@EntityModel({ name: 'sys_user' })
export default class User extends BaseEntity {
  @Column({ comment: '用户名', length: 100 })
  username: string;
  @Column({ name: 'nick_name', comment: '昵称', nullable: true })
  nickName: string;
  @Column({ comment: '年龄', nullable: true })
  age: number;
}
