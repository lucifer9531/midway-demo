import { Timestamp } from 'typeorm';

export default class UserDTO {
  id: number;
  username: string;
  age: number;
  nickName: string;
  createTime?: Timestamp;
  updatedTime?: Timestamp;
}
