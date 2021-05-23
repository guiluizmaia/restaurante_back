import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import ICategoriesMenu from '../dtos/ICategoriesMenu';
import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';
import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

interface IRequest extends ICategoriesMenu {
    id: string;
}

@injectable()
class UpdateCategoryMenuService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute({
        id,
        name,
    }: IRequest): Promise<categoriesMenu | string> {
        const categorie = await this.categoriesMenuRepository.findByid(id);

        if (!categorie) {
            throw new AppError("Category not found");
        }
        categorie.name = name;

        const categorieup = await this.categoriesMenuRepository.save(categorie);

        return categorieup;
    }
}

export default UpdateCategoryMenuService;
