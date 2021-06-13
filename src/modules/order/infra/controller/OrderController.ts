import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderService from '../../services/CreateOrderService';

import FindUserByIdService from '../../../user/services/FindUserByIdService';

import FindMenuByIdService from '../../../menu/services/FindMenuByIdService';



import AppError from '../../../../infra/errors/AppError';

class OrderController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.user;
        const { idClient,
            description,
            itens,
            price,
            adress, } = request.body;

        const findUserByIdService = container.resolve(
            FindUserByIdService,
        );

        const findMenuByIdService = container.resolve(
            FindMenuByIdService,
        );

        const createOrderService = container.resolve(CreateOrderService);

        const user = await findUserByIdService.execute(id);

        if (!user) {
            throw new AppError("User not found");
        }

        let p = 0;
        await Promise.all(
            itens.map(async e =>{
                const item = await findMenuByIdService.execute(e);
                if(item){
                    p += parseFloat(item.price);
                }
            })
        )

        const order = await createOrderService.execute({ idClient, idUser: id, description, itens, price: p, adress, });

        return response.status(201).json(order);
    }


}

export default OrderController;
