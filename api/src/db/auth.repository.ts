const fsPromises = require('fs').promises;
import path from 'path';
import IUser from '../interfaces/user.interface';

const USERS_FILE = path.join(__dirname, "..", "..", "users.json");

export default class UsersRepository {

    static async readUsers(): Promise<IUser[]> {
        const fileContent = await fsPromises.readFile(USERS_FILE, 'utf8');
        return JSON.parse(fileContent) as IUser[];
    }

    static async writeUsers(users: IUser[]) {
        await fsPromises.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    }

}