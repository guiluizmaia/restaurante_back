import { inject, injectable } from 'tsyringe';

import ICategoriesMenu from '../dtos/ICategoriesMenu';
import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';
import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

@injectable()
class CreateCategoryMenuService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute({
        name,
    }: ICategoriesMenu): Promise<categoriesMenu | string> {
        const categorie = await this.categoriesMenuRepository.create({ name });
        return categorie;
    }
}

export default CreateCategoryMenuService;
