import { inject, injectable } from 'tsyringe';

import IOrder from '../dtos/IOrder';
import order from '../infra/typeorm/schemas/order';
import IOrderRepository from '../repositories/IOrderRepository';

@injectable()
class CreateOrderService {
    private orderRepository: IOrderRepository;

    constructor(
        @inject('OrderRepository')
        orderRepository: IOrderRepository,
    ) {
        this.orderRepository = orderRepository;
    }

    public async execute({
        idClient,
        idUser,
        description,
        itens,
        price,
        adress,
    }: IOrder): Promise<order> {
        const order = await this.orderRepository.create({
            idClient,
            idUser,
            description,
            itens,
            price,
            adress,
        });

        return order;
    }
}

export default CreateOrderService;
