import { inject, injectable } from 'tsyringe';

import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

@injectable()
class DeleteCategoryMenuService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute(id: string): Promise<void> {
        await this.categoriesMenuRepository.delete(id);
    }
}

export default DeleteCategoryMenuService;
