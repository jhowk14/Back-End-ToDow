import { Application} from 'express'; 
import { createTask } from '../controllers/task.controller';

const userRoute = (app: Application) => { 
    app.post('/task', createTask)
}

export default userRoute;