import { Request, Response } from 'express';
import prisma from '../services/prisma';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import GetAuthUser from '../repositorys/auth.repo';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const auth = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const userExists = await GetAuthUser(email);

        if (!userExists) {
            res.status(404).json({ message: "User does not exist" });
            return; // Return early to avoid further execution
        }

        const passwordUser = userExists.password;
        const passwordMatch = await compare(password, passwordUser);

        if (!passwordMatch) {
            res.status(401).json({ message: "Invalid password" });
            return; // Return early if the password doesn't match
        }

        if (typeof jwtSecret === 'undefined') {
            res.status(500).json({ message: "JWT_SECRET is not defined" });
            return; // Return early if JWT_SECRET is not defined
        }

        // If the email and password are valid and jwtSecret is defined, generate a JWT token
        const token = sign({ userId: userExists.id }, jwtSecret, {
            expiresIn: '1h', // You can adjust the expiration time as needed
        });

        res.status(200).json({ message: "Authentication successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
