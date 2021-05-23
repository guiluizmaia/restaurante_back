import { inject, injectable } from 'tsyringe';

import IMenuRepository from '../repositories/IMenuRepository';

@injectable()
class DeleteMenuService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute(id: string): Promise<void> {
        await this.menuRepository.delete(id);
    }
}

export default DeleteMenuService;
