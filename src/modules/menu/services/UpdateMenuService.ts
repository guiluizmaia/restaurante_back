import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import IMenu from '../dtos/IMenu';
import menu from '../infra/typeorm/schemas/menu';
import IMenuRepository from '../repositories/IMenuRepository';

interface IRequest extends IMenu {
    id: string;
}

@injectable()
class UpdateMenuService {
    private menuRepository: IMenuRepository;

    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
    ) {
        this.menuRepository = menuRepository;
    }

    public async execute({
        id,
        categoryName,
        categoryId,
        name,
        description,
        price,
    }: IRequest): Promise<menu | undefined> {
        const menu = await this.menuRepository.findByid(id);

        if (!menu) {
            throw new AppError("Item not found")
        }

        menu.categoryName = categoryName;
        menu.name = name;
        menu.description = description;
        menu.price = price;

        await this.menuRepository.save(menu);

        return menu;
    }
}

export default UpdateMenuService;
