import { Request, Response } from 'express';
import UserRepository, { createUserSchema } from '../repositorys/user.repo';
import { ApiError } from '../helpers/erroHelper';

const user = new UserRepository()

export const createUser = async (req: Request, res: Response) => { 
        const data = req.body;
        const userData = createUserSchema.parse(data);
        if(!userData){
            throw new ApiError("data invalid", 400);
        }
        const response = await user.createUserRepo(userData);
        res.status(201).json(response);
}

export const getUser = async (req: Request, res: Response) => { 
        const userId = parseInt(req.params.userId);
        const users = await user.getUserById(userId);

        if (!users) {
            throw new ApiError("User not found", 404);
        } else {
            res.status(200).json(users);
        }
}

export const getAllUsers = async (req: Request, res: Response) => { 
        const users = await user.getAllUser();
        res.status(200).json(users);
}

export const updateUser = async (req: Request, res: Response) => { 
        const userId = parseInt(req.params.userId);
        const data = req.body;
        const users = await user.updateUserById(userId, data);

        if (!users) {
            throw new ApiError("User not found", 404);
        } else {
            res.status(200).json(users);
        }
}

export const deleteUser = async (req: Request, res: Response) => { 
        const userId = parseInt(req.params.userId);
        const users = await user.deleteUserById(userId);

        if (!users) {
            throw new ApiError("User not found", 404);
        } else {
            res.status(204).send(); // Resposta sem conteúdo se a exclusão for bem-sucedida
        }
}
