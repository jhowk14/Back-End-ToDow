import authRoute from "./auth.routes";
import taskRoute from "./task.routes";
import userRoute from "./user.routes";
import { Application} from 'express'; 

const routes = (app: Application) => {
    authRoute(app)
    userRoute(app)
    taskRoute(app)
}

export default routes