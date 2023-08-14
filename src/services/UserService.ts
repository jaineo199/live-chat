import User from "../models/User";

class UserService {
  static async getUsers() {
    return User.find();
  }
}

export default UserService;
