import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../services/CreateUserService';
import UpdateUserService from '../../services/UpdateUserService';
import DeleteUserService from '../../services/DeleteUserService';
import DeleteMenuByUserService from '../../../menu/services/DeleteMenuByUserService';
import DeleteCategoryMenuByUserService from '../../../menu/services/DeleteCategoryMenuByUserService';





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

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteUserService = container.resolve(
            DeleteUserService,
        );

        const deleteMenuByUserService = container.resolve(
            DeleteMenuByUserService,
        );

        const deleteCategoryMenuByUserService = container.resolve(
            DeleteCategoryMenuByUserService,
        );

        await deleteMenuByUserService.execute(id);

        await deleteCategoryMenuByUserService.execute(id);

        await deleteUserService.execute(id);

        return response.status(201).json();
    }
}


export default UserController;
