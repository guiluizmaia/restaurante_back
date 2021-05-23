import { inject, injectable } from 'tsyringe';

import IMenuRepository from '../repositories/IMenuRepository';

@injectable()
class DeleteMenuByCategoryService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute(categoryId: string): Promise<void> {
        await this.menuRepository.deleteByCategory(categoryId);
    }
}

export default DeleteMenuByCategoryService;
