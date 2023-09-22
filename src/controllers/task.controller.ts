import { Request, Response } from 'express'; 
import { createTaskRepo, createTaskSchema } from '../repositorys/task.repo';

export const createTask = async (req: Request, res: Response) => { 
    try {
        const data =  req.body
        const taksData = createTaskSchema.parse(data);
        const response = await createTaskRepo(taksData)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}