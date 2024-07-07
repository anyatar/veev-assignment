import UsersRepository from '../db/auth.repository';
import IUser from '../interfaces/user.interface';
import crypto from 'crypto';

class UserService {

  async createUser(user: IUser) {
    const users:IUser[] = await UsersRepository.readUsers();
    user.id = crypto.randomUUID();
    users.push(user);
    await UsersRepository.writeUsers(users);
  }

  async find(username: string):Promise<IUser | undefined> {
    const users:IUser[] = await UsersRepository.readUsers();
    return users.find((user) => user.username === username);
  }

}

export default new UserService();
