import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindByIdCategoryMenuService from '../../services/FindByIdCategoryMenuService';
import CreateMenuService from '../../services/CreateMenuService';
import DeleteMenuService from '../../services/DeleteMenuService';
import IndexMenuService from '../../services/IndexMenuService';
import UpdateMenuService from '../../services/UpdateMenuService';
import AppError from '../../../../infra/errors/AppError';

class MenuController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { categoryId, name, description, price } = request.body;

        const findByIdCategoryMenuService = container.resolve(
            FindByIdCategoryMenuService,
        );

        const createMenuService = container.resolve(CreateMenuService);

        const categorie = await findByIdCategoryMenuService.execute(categoryId);

        if (!categorie) {
            throw new AppError("Category not found");
        }

        const menu = await createMenuService.execute({
            categoryName: categorie.name,
            categoryId,
            name,
            description,
            price,
        });

        return response.status(201).json(menu);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id, categoryId, name, description, price } = request.body;

        const updateMenuService = container.resolve(
            UpdateMenuService,
        );


        const menu = await updateMenuService.execute({ id, categoryId, name, description, price });

        return response.status(201).json(menu);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const indexMenuService = container.resolve(
            IndexMenuService,
        );

        const menu = await indexMenuService.execute();

        return response.status(201).json(menu);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteMenuService = container.resolve(
            DeleteMenuService,
        );

        const menu = await deleteMenuService.execute(id);

        return response.status(201).json(menu);
    }
}

export default MenuController;
