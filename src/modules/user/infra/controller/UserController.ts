import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../services/CreateUserService';
import UpdateUserService from '../../services/UpdateUserService';


class UserController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password, name, tel, cel, rg, cpf, adress, date } = request.body;

        const createUserService = container.resolve(
            CreateUserService,
        );

        const user = await createUserService.execute({
            email, password, name, tel, cel, rg, cpf, adress, date
        });

        return response.status(201).json(user);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id, email, password, name, tel, cel, rg, cpf, adress, date } = request.body;

        const updateUserService = container.resolve(
            UpdateUserService,
        );

        const user = await updateUserService.execute({
            id, email, password, name, tel, cel, rg, cpf, adress, date
        });

        return response.status(201).json(user);
    }
}


export default UserController;
