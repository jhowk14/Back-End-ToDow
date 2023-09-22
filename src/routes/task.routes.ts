import { Application } from 'express';
import { createTask, updateTask, deleteTask, getTask } from '../controllers/task.controller';

const taskRoute = (app: Application) => {
    app.post('/task', createTask);
    app.put('/task/:taskId', updateTask); // Rota para atualizar uma tarefa pelo ID
    app.delete('/task/:taskId', deleteTask); // Rota para excluir uma tarefa pelo ID
    app.get('/task', getTask); // Rota para obter uma tarefa pelo ID
}

export default taskRoute;
