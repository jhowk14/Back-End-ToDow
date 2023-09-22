import { Application } from 'express';
import { createUser, getAllUsers, updateUser, deleteUser,getUser } from '../controllers/user.controller';

const userRoute = (app: Application) => {
    app.post('/user', createUser);
    app.get('/user', getAllUsers);
    app.get('/user/:userId', getUser); // Rota para buscar um usuário pelo ID
    app.put('/user/:userId', updateUser); // Rota para atualizar um usuário pelo ID
    app.delete('/user/:userId', deleteUser); // Rota para excluir um usuário pelo ID
}

export default userRoute;
