import userRoute from "./user.routes";
import { Application} from 'express'; 

const routes = (app: Application) => {
    userRoute(app)
}

export default routes