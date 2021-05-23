import { inject, injectable } from 'tsyringe';

import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';
import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

@injectable()
class FindByIdCategoryMenuService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute(id: string): Promise<categoriesMenu | undefined> {
        const categorie = await this.categoriesMenuRepository.findByid(id);

        return categorie;
    }
}

export default FindByIdCategoryMenuService;
