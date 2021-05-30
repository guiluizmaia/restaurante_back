import ICategoriesMenu from '../dtos/ICategoriesMenu';
import categoriesMenu from '../infra/typeorm/schemas/categoriesMenu';

export default interface ICategoriesMenuRepository {
    create({ id, name }: ICategoriesMenu): Promise<categoriesMenu>;
    findByid(id: string): Promise<categoriesMenu | undefined>;
    index(iduser: string): Promise<categoriesMenu[] | undefined>;
    save(categorie: categoriesMenu): Promise<categoriesMenu>;
    delete(id: string): Promise<void>;
    deleteForIdUser(id: string): Promise<void>;
}
