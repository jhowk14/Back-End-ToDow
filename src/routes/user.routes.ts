import { Application } from 'express';
import { createUser, getAllUsers, updateUser, deleteUser,getUser } from '../controllers/user.controller';
import { authAuthorization } from '../middleware/authAutorization';

const userRoute = (app: Application) => {
    app.post('/user', authAuthorization ,createUser);
    app.get('/user', authAuthorization ,getAllUsers);
    app.get('/user/:userId',authAuthorization , getUser); // Rota para buscar um usuário pelo ID
    app.put('/user/:userId', authAuthorization ,updateUser); // Rota para atualizar um usuário pelo ID
    app.delete('/user/:userId',authAuthorization , deleteUser); // Rota para excluir um usuário pelo ID
}

export default userRoute;
