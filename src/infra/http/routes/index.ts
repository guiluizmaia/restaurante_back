import { Router } from 'express';

import categorieMenu from '../../../modules/menu/infra/routes/categorieMenu.routes';
import menuRoute from '../../../modules/menu/infra/routes/menu.routes';
import userRoute from '../../../modules/user/infra/routes/user.routes';


const appRoutes = Router();

appRoutes.use('/categorymenu', categorieMenu);
appRoutes.use('/menu', menuRoute);
appRoutes.use('/user', userRoute);


export default appRoutes;
