import { Request, Response } from 'express'; 
import { createUserRepo, createUserSchema } from "../repositorys/user.repo";

export const createUser = async (req: Request, res: Response) => { 
    try {
        const data =  req.body
        const userData = createUserSchema.parse(data);
        const response = await createUserRepo(userData)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}