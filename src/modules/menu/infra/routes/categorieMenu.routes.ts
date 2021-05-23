import { Router } from 'express';
import { ensureAuthenticated } from '../../../../infra/http/middlewares/ensureAuthenticated';

import CategoryMenuController from '../controller/CategoryMenuController';

const categoryMenuController = new CategoryMenuController();

const categorieMenu = Router();

categorieMenu.use(ensureAuthenticated);
categorieMenu.post('/', categoryMenuController.create);
categorieMenu.patch('/', categoryMenuController.update);
categorieMenu.get('/', categoryMenuController.index);
categorieMenu.delete('/:id', categoryMenuController.delete);

export default categorieMenu;
