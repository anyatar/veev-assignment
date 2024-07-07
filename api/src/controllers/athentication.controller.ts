import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt  from 'jsonwebtoken';
import dotenv from "dotenv";
import IUser from "../interfaces/user.interface";
import userService from "../services/user.service";

dotenv.config();

export default class AthenticationController {

    async register(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user:IUser = { username, password: hashedPassword };
            await userService.createUser(user);
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: `Registration failed : ${error}` });
        }
    };

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const user = await userService.find(username);
            if (!user) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'your_secret_key', {
                expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: `Login failed: ${error}` });
        }
    }
}
