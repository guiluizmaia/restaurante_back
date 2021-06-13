import { Router } from 'express';
import { ensureAuthenticated } from '../../../../infra/http/middlewares/ensureAuthenticated';

import OrderController from '../controller/OrderController';

const orderController = new OrderController();

const orderRoute = Router();

orderRoute.use(ensureAuthenticated);
orderRoute.post('/', orderController.create);



export default orderRoute;
