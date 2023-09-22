import { Application} from 'express'; 
import { createUser } from '../controllers/user.controller';

const userRoute = (app: Application) => { 
    app.post('/user', createUser)
}

export default userRoute;