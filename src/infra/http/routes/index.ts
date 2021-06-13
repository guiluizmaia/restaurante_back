import { Router } from 'express';

import categorieMenu from '../../../modules/menu/infra/routes/categorieMenu.routes';
import menuRoute from '../../../modules/menu/infra/routes/menu.routes';
import userRoute from '../../../modules/user/infra/routes/user.routes';
import orderRoute from '../../../modules/order/infra/routes/order.routes';



const appRoutes = Router();

appRoutes.use('/categorymenu', categorieMenu);
appRoutes.use('/menu', menuRoute);
appRoutes.use('/user', userRoute);
appRoutes.use('/order', orderRoute);



export default appRoutes;
