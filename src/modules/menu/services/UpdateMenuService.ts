import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import IMenu from '../dtos/IMenu';
import menu from '../infra/typeorm/schemas/menu';
import IMenuRepository from '../repositories/IMenuRepository';
import ICategoriesMenuRepository from '../repositories/ICategoriesMenuRepository';


interface IRequest extends IMenu {
    id: string;
}

@injectable()
class UpdateMenuService {
    private menuRepository: IMenuRepository;
    private categoriesMenuRepository: ICategoriesMenuRepository;


    constructor(
        @inject('MenuRepository')
        menuRepository: IMenuRepository,
        @inject('CategoriesMenuRepository')
        categoriesMenuRepository: ICategoriesMenuRepository,
    ) {
        this.menuRepository = menuRepository;
        this.categoriesMenuRepository = categoriesMenuRepository;
    }

    public async execute({
        id,
        categoryId,
        name,
        description,
        price,
    }: IRequest): Promise<menu | undefined> {
        const menu = await this.menuRepository.findByid(id);

        if (!menu) {
            throw new AppError("Item not found")
        }

        menu.name = name;
        menu.description = description;
        menu.price = price;

        await this.menuRepository.save(menu);

        return menu;
    }
}

export default UpdateMenuService;
