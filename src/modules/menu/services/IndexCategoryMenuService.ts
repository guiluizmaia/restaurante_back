import { inject, injectable } from 'tsyringe';

import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';
import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

@injectable()
class IndexCategoryMenuService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute(): Promise<categoriesMenu[] | undefined> {
        const categories = await this.categoriesMenuRepository.index();

        return categories;
    }
}

export default IndexCategoryMenuService;
