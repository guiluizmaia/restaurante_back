import { Router } from 'express';
import { ensureAuthenticated } from '../../../../infra/http/middlewares/ensureAuthenticated';
import MenuController from '../controller/MenuController';

const menuController = new MenuController();

const menuRoute = Router();

menuRoute.use(ensureAuthenticated);

menuRoute.post('/', menuController.create);


menuRoute.get('/', menuController.index);
menuRoute.patch('/', menuController.update);
menuRoute.delete('/:id', menuController.delete);


export default menuRoute;
