import { Request, Response } from 'express'; 
import { createTaskRepo, createTaskSchema, deleteTaskById, getTasks, updateTaskById } from '../repositorys/task.repo';

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

export const updateTask = async (req: Request, res: Response) => {
    try {
        const taskId = parseInt(req.params.taskId); // Certifique-se de que taskId seja um número
        const data = req.body;
        
        // Valide os dados da solicitação usando o esquema de criação de tarefa
        const taskData = createTaskSchema.parse(data);

        // Chame a função para atualizar a tarefa pelo ID
        const updatedTask = await updateTaskById(taskId, taskData);

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const taskId = parseInt(req.params.taskId); // Certifique-se de que taskId seja um número
        
        // Chame a função para excluir a tarefa pelo ID
        const deletedTask = await deleteTaskById(taskId);

        res.status(204).send(deleteTask); // Resposta sem conteúdo se a exclusão for bem-sucedida
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getTask = async (req: Request, res: Response) => {
    try {
        const {taskId ,userId} = req.body; // Certifique-se de que taskId seja um número
        
        // Chame a função para obter uma tarefa pelo ID
        const task = await getTasks(userId, taskId); // Passamos undefined para userId e taskId para o ID da tarefa

        if (task.length === 0) {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        } else {
            res.status(200).json(task); // Assumindo que a função getTasks retorna um array de tarefas, retornamos a primeira (ou única) tarefa encontrada.
        }
    } catch (error) {
        res.status(400).json(error);
    }
}