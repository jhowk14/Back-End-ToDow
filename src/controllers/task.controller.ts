import { Request, Response } from 'express'; 
import TaskRepository, { createTaskSchema } from '../repositorys/task.repo';
import { ApiError } from '../helpers/erroHelper';

const tasks = new TaskRepository()

export const createTask = async (req: Request, res: Response) => { 
    try {
        const data =  req.body
        const taksData = createTaskSchema.parse(data);
        if(!taksData){
            throw new ApiError("data incorrect", 400)
        }
        const response = await tasks.createTaskRepo(taksData)
        if(!response){
            throw new ApiError("erro create task",400)
        }
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const updateTask = async (req: Request, res: Response) => {
        const taskId = parseInt(req.params.taskId); // Certifique-se de que taskId seja um número
        const data = req.body;
        const updatedTask = await tasks.updateTaskById(taskId, data);
        if(!updateTask){
            throw new ApiError("erro update task",400)
        }
        res.status(200).json(updatedTask);
}

export const deleteTask = async (req: Request, res: Response) => {
        const taskId = parseInt(req.params.taskId); // Certifique-se de que taskId seja um número
        
        // Chame a função para excluir a tarefa pelo ID
        const deletedTask = await tasks.deleteTaskById(taskId);
        if(!deleteTask){
            throw new ApiError("erro delete task",400)
        }
        res.status(204).send(deleteTask); // Resposta sem conteúdo se a exclusão for bem-sucedida
}

export const getTask = async (req: Request, res: Response) => {
        const {taskId} = req.body; // Certifique-se de que taskId seja um número
        const userId = req.params.userId
        // Chame a função para obter uma tarefa pelo ID
        const task = await tasks.getTasks(parseInt(userId), taskId); // Passamos undefined para userId e taskId para o ID da tarefa

        res.status(200).json(task); // Assumindo que a função getTasks retorna um array de tarefas, retornamos a primeira (ou única) tarefa encontrada.
}