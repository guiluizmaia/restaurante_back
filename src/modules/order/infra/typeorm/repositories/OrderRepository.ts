import { getMongoRepository, MongoRepository } from 'typeorm';

import IOrder from '../../../dtos/IOrder';
import order from '../schemas/order';

import IOrderRepository from '../../../repositories/IOrderRepository';


class OrderRepository implements IOrderRepository  {
    private ormRepository: MongoRepository<order>;

    constructor() {
        this.ormRepository = getMongoRepository(order, 'mongodb');
    }

    public async create({
        idClient,
        idUser,
        description,
        itens,
        price,
        adress,
    }: IOrder): Promise<order> {
        const order = await this.ormRepository.create({
            idClient,
            idUser,
            description,
            itens,
            price,
            adress,
        });

        await this.ormRepository.save(order);

        return order;
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

    public async findByid(id: string): Promise<order | undefined> {
        const categorie = await this.ormRepository.findOne(id);
        return categorie;
    }

    public async index(id: string): Promise<order[] | undefined> {
        const categories = await this.ormRepository.find({
            where: {
                idUser: id
            }
        });
        return categories;
    }

    public async save(data: order): Promise<order> {
        const menu = await this.ormRepository.save(data);
        return menu;
    }
}

export default OrderRepository;
