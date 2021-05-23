import IUser from '../dtos/IUser';
import user from '../infra/typeorm/schemas/user';

export default interface IUserRepository {
    create({
        email,
        password,
        name,
        tel,
        cel,
        rg,
        cpf,
        adress,
        date
    }: IUser): Promise<user>;
    delete(id: string): Promise<void>;
    findByid(id: string): Promise<user | undefined>;
    index(): Promise<user[] | undefined>;
    save(data: user): Promise<user>;
    findByEmail(email: string): Promise<user | undefined>;
}
