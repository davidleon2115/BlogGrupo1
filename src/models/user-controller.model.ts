import { User } from "./user.model";

export interface UserService {
  getAll(): User[] | Promise<User[]>;
  update(id: User['id']): User | Promise<User>;
  create(): User | Promise<User>;
  findOne(id: User['id']): User | undefined | Promise<User | undefined>;
}