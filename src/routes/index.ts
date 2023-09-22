import taskRoute from "./task.routes";
import userRoute from "./user.routes";
import { Application} from 'express'; 

const routes = (app: Application) => {
    userRoute(app)
    taskRoute(app)
}

export default routes