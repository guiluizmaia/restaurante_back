import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryMenuService from '../../services/CreateCategoryMenuService';
import DeleteCategoryMenuService from '../../services/DeleteCategoryMenuService';
import IndexCategoryMenuService from '../../services/IndexCategoryMenuService';
import UpdateCategoryMenuService from '../../services/UpdateCategoryMenuService';
import DeleteMenuByCategoryService from '../../services/DeleteMenuByCategoryService';

class CategoryMenuController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name } = request.body;

        const createCategoryMenuService = container.resolve(
            CreateCategoryMenuService,
        );

        const categorie = await createCategoryMenuService.execute({
            name,
        });

        return response.status(201).json(categorie);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id, name } = request.body;

        const updateCategoryMenuService = container.resolve(
            UpdateCategoryMenuService,
        );

        const categorie = await updateCategoryMenuService.execute({
            id,
            name,
        });

        return response.status(201).json(categorie);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteCategoryMenuService = container.resolve(
            DeleteCategoryMenuService,
        );

        const deleteMenuByCategoryService = container.resolve(
            DeleteMenuByCategoryService,
        );

        await deleteCategoryMenuService.execute(id);

        await deleteMenuByCategoryService.execute(id);

        return response.status(201).json();
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const indexCategoryMenuService = container.resolve(
            IndexCategoryMenuService,
        );

        const index = await indexCategoryMenuService.execute();

        return response.status(201).json(index);
    }
}
export default CategoryMenuController;
