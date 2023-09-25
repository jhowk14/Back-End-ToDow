import { Application } from 'express';
import { createTask, updateTask, deleteTask, getTask } from '../controllers/task.controller';
import { authAuthorization } from '../middleware/authAutorization';

const taskRoute = (app: Application) => {
    app.post('/task', authAuthorization ,createTask);
    app.put('/task/:taskId', authAuthorization ,updateTask); // Rota para atualizar uma tarefa pelo ID
    app.delete('/task/:taskId',authAuthorization , deleteTask); // Rota para excluir uma tarefa pelo ID
    app.get('/task/:userId',authAuthorization , getTask); // Rota para obter uma tarefa pelo ID
}

export default taskRoute;
