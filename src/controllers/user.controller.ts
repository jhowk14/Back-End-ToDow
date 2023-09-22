import { Request, Response } from 'express';
import { createUserRepo, createUserSchema, getUserById, getAllUser, updateUserById, deleteUserById } from "../repositorys/user.repo";

export const createUser = async (req: Request, res: Response) => { 
    try {
        const data = req.body;
        const userData = createUserSchema.parse(data);
        const response = await createUserRepo(userData);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const user = await getUserById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => { 
    try {
        const users = await getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const data = req.body;
        const user = await updateUserById(userId, data);

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => { 
    try {
        const userId = parseInt(req.params.userId);
        const user = await deleteUserById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.status(204).send(); // Resposta sem conteúdo se a exclusão for bem-sucedida
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
