import { User } from "../models/user.model";
import {UserService} from "../models/user-controller.model"

export class UserController implements UserService  {

  async getAll() {
    return []
  }

  async update(id: User['id'], changes: User) {
  }

  async create(dto: User) {
  }

  async findOne(id: User['id']) {
  }

}
