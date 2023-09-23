import { Application } from 'express';
import { auth } from '../controllers/auth.controller';

const authRoute = (app: Application) => {
    app.post('/auth', auth);
}

export default authRoute;
