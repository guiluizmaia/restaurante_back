import { inject, injectable } from 'tsyringe';

import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';

@injectable()
class DeleteCategoryMenuByUserService {
    private categoriesMenuRepository: ICategoriesMenuRepository;

    constructor(
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute(idUser: string): Promise<void> {
        await this.categoriesMenuRepository.deleteForIdUser(idUser);
    }
}

export default DeleteCategoryMenuByUserService;
