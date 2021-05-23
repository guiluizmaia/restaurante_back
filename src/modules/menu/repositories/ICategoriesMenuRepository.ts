import ICategoriesMenu from '../dtos/ICategoriesMenu';
import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';

export default interface ICategoriesMenuRepository {
    create({ name }: ICategoriesMenu): Promise<categoriesMenu>;
    findByid(id: string): Promise<categoriesMenu | undefined>;
    index(): Promise<categoriesMenu[] | undefined>;
    save(categorie: categoriesMenu): Promise<categoriesMenu>;
    delete(id: string): Promise<void>;
}
