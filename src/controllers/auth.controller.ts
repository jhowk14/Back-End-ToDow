import { Request, Response } from 'express';
import prisma from '../services/prisma';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import GetAuthUser from '../repositorys/auth.repo';
import { ApiError } from '../helpers/erroHelper';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const auth = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const userExists = await GetAuthUser(email);

        if (!userExists) {
            throw new ApiError("User not exist", 404) // Return early to avoid further execution
        }

        const passwordUser = userExists.password;
        const passwordMatch = await compare(password, passwordUser);

        if (!passwordMatch) {
            throw new ApiError("Invalid Password", 401)
        }

        if (typeof jwtSecret === 'undefined') {
            throw new ApiError("JWT secret Not defined", 500)
        }

        // If the email and password are valid and jwtSecret is defined, generate a JWT token
        const token = sign({ userId: userExists.id }, jwtSecret, {
            expiresIn: '1h', // You can adjust the expiration time as needed
        });

        res.status(200).json({ message: "Authentication successful", token });
}
