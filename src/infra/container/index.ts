import { container } from 'tsyringe';

import ICategoriesMenuRepository from '../../modules/menu/repositories/ICategoriesMenuRepository';
import CategoriesMenuRepository from '../../modules/menu/infra/typeorm/repositories/CategoriesMenuRepository';

import IMenuRepository from '../../modules/menu/repositories/IMenuRepository';
import MenuRepository from '../../modules/menu/infra/typeorm/repositories/MenuRepository';

import IUserRepository from '../../modules/user/repositories/IUserRepository';
import UserRepository from '../../modules/user/infra/typeorm/repositories/UserRepository';

import IOrderRepository from '../../modules/order/repositories/IOrderRepository';
import OrderRepository from '../../modules/order/infra/typeorm/repositories/OrderRepository';


container.registerSingleton<ICategoriesMenuRepository>(
  'CategoriesMenuRepository',
  CategoriesMenuRepository,
);

container.registerSingleton<IMenuRepository>('MenuRepository', MenuRepository);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IOrderRepository>('OrderRepository', OrderRepository);


