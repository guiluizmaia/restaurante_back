import { getMongoRepository, MongoRepository } from 'typeorm';

import ICategoriesMenu from '../../../dtos/ICategoriesMenu';
import categoriesMenu from '../schemas/categoriesMenu';

class CategoriesMenuRepository {
    private ormRepository: MongoRepository<categoriesMenu>;

    constructor() {
        this.ormRepository = getMongoRepository(categoriesMenu, 'mongodb');
    }

    public async create({ name }: ICategoriesMenu): Promise<categoriesMenu> {
        const categorie = await this.ormRepository.create({
            name,
        });

        await this.ormRepository.save(categorie);

        return categorie;
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

    public async findByid(id: string): Promise<categoriesMenu | undefined> {
        const categorie = await this.ormRepository.findOne(id);
        return categorie;
    }

    public async index(): Promise<categoriesMenu[] | undefined> {
        const categories = await this.ormRepository.find();
        return categories;
    }

    public async save(categorie: categoriesMenu): Promise<categoriesMenu> {
        await this.ormRepository.save(categorie);
        return categorie;
    }
}

export default CategoriesMenuRepository;
