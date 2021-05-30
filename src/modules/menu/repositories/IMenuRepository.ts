import IMenu from '../dtos/IMenu';
import menu from '../infra/typeorm/schemas/menu';

export default interface IMenuRepository {
    create({ idUser, categoryId, name, description, price }: IMenu): Promise<menu>;
    delete(id: string): Promise<void>;
    findByid(id: string): Promise<menu | undefined>;
    index(id: string): Promise<menu[] | undefined>;
    save(data: menu): Promise<menu>;
    deleteByCategory(categoryId: string): Promise<void>;
    deleteForIdUser(id: string): Promise<void>;
}
