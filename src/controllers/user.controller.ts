import { Request, Response } from 'express';
import UserRepository, { createUserSchema } from '../repositorys/user.repo';

const user = new UserRepository()

export const createUser = async (req: Request, res: Response) => { 
    try {
        const data = req.body;
        const userData = createUserSchema.parse(data);
        const response = await user.createUserRepo(userData);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const users = await user.getUserById(userId);

        if (!users) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => { 
    try {
        const users = await user.getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const data = req.body;
        const users = await user.updateUserById(userId, data);

        if (!users) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const users = await user.deleteUserById(userId);

        if (!users) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(204).send(); // Resposta sem conteúdo se a exclusão for bem-sucedida
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
