import { inject, injectable } from 'tsyringe';

import IOrder from '../dtos/IOrder';
import order from '../infra/typeorm/schemas/order';
import IOrderRepository from '../repositories/IOrderRepository';

@injectable()
class ListOrderService {
    private orderRepository: IOrderRepository;

    constructor(
        @inject('OrderRepository')
        orderRepository: IOrderRepository,
    ) {
        this.orderRepository = orderRepository;
    }

    public async execute(id: string): Promise<order[] | undefined> {
        const order = await this.orderRepository.index(id);

        return order;
    }
}

export default ListOrderService;
