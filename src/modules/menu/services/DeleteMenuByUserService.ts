import { inject, injectable } from 'tsyringe';

import IMenuRepository from '../repositories/IMenuRepository';

@injectable()
class DeleteMenuByUserService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute(idUser: string): Promise<void> {
        await this.menuRepository.deleteForIdUser(idUser);
    }
}

export default DeleteMenuByUserService;
