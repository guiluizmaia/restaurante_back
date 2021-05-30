import { getMongoRepository, MongoRepository } from 'typeorm';

import IMenu from '../../../dtos/IMenu';
import menu from '../schemas/menu';
import IMenuRepository from '../../../repositories/IMenuRepository';


class MenuRepository implements IMenuRepository {
    private ormRepository: MongoRepository<menu>;

    constructor() {
        this.ormRepository = getMongoRepository(menu, 'mongodb');
    }

    public async create({
        idUser,
        categoryName,
        categoryId,
        name,
        description,
        price,
    }: IMenu): Promise<menu> {
        const menu = await this.ormRepository.create({
            idUser,
            categoryName,
            categoryId,
            name,
            description,
            price,
        });

        console.log(menu);
        await this.ormRepository.save(menu);

        return menu;
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

    public async deleteByCategory(categoryId: string): Promise<void> {
        await this.ormRepository.deleteMany({ categoryId });
    }

    public async deleteForIdUser(id: string): Promise<void> {
        await this.ormRepository.deleteMany({ idUser: id });
    }

    public async findByid(id: string): Promise<menu | undefined> {
        const categorie = await this.ormRepository.findOne(id);
        return categorie;
    }

    public async index(id: string): Promise<menu[] | undefined> {
        const categories = await this.ormRepository.find({
            where: {
                idUser: id
            },
            order: {
                categoryName: 'ASC'
            }
        });
        return categories;
    }

    public async save(data: menu): Promise<menu> {
        const menu = await this.ormRepository.save(data);
        return menu;
    }
}

export default MenuRepository;
