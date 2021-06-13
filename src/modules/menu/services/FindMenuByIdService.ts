import { inject, injectable } from 'tsyringe';

import IMenu from '../dtos/IMenu';
import menu from '../infra/typeorm/schemas/menu';
import IMenuRepository from '../repositories/IMenuRepository';

@injectable()
class FindMenuByIdService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute(id: string): Promise<menu | undefined> {
        const menu = await this.menuRepository.findByid(id);

        return menu;
    }
}

export default FindMenuByIdService;
