import { Router } from 'express';
import { ensureAuthenticated } from '../../../../infra/http/middlewares/ensureAuthenticated';

import UserController from '../controller/UserController';
import AuthenticateController from '../controller/AuthenticateController';

const userController = new UserController();
const authenticateController = new AuthenticateController();

const userRoute = Router();

userRoute.get('/login/:email/:password', authenticateController.login);
userRoute.use(ensureAuthenticated);
userRoute.post('/', userController.create);
userRoute.patch('/', userController.update);



export default userRoute;
