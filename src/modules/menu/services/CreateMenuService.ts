import { inject, injectable } from 'tsyringe';

import IMenu from '../dtos/IMenu';
import menu from '../infra/typeorm/schemas/menu';
import IMenuRepository from '../repositories/IMenuRepository';

@injectable()
class CreateMenuService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute({
        categoryName,
        categoryId,
        name,
        description,
        price,
    }: IMenu): Promise<menu> {
        const menu = await this.menuRepository.create({
            categoryName,
            categoryId,
            name,
            description,
            price,
        });

        return menu;
    }
}

export default CreateMenuService;
