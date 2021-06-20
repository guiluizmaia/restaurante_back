import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import IOrder from '../dtos/IOrder';
import order from '../infra/typeorm/schemas/order';
import IOrderRepository from '../repositories/IOrderRepository';

@injectable()
class UpdateStatusOrderService {
    private orderRepository: IOrderRepository;

    constructor(
        @inject('OrderRepository')
        orderRepository: IOrderRepository,
    ) {
        this.orderRepository = orderRepository;
    }

    public async execute(idOrder: string, status: string): Promise<order | undefined> {
        const order = await this.orderRepository.findByid(idOrder);

        if(!order){
            throw new AppError('Order not found');
        }

        order.status = status;

        await this.orderRepository.save(order);

        return order;
    }
}

export default UpdateStatusOrderService;
