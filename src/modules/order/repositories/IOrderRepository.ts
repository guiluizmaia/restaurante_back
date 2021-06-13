import IOrder from '../dtos/IOrder';
import order from '../infra/typeorm/schemas/order';

export default interface IOrderRepository {
    create({
        idClient,
        idUser,
        description,
        itens,
        price,
        adress,
    }: IOrder): Promise<order>;
    delete(id: string): Promise<void>;
    findByid(id: string): Promise<order | undefined>;
    index(id: string): Promise<order[] | undefined>;
    save(data: order): Promise<order> ;
}
