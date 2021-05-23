import { getMongoRepository, MongoRepository } from 'typeorm';

import IUser from '../../../dtos/IUser';
import user from '../schemas/user';

class UserRepository {
    private ormRepository: MongoRepository<user>;

    constructor() {
        this.ormRepository = getMongoRepository(user, 'mongodb');
    }

    public async create({
        email,
        password,
        name,
        tel,
        cel,
        rg,
        cpf,
        adress,
        date
    }: IUser): Promise<user> {
        const user = await this.ormRepository.create({
            email,
            password,
            name,
            tel,
            cel,
            rg,
            cpf,
            adress,
            date,
            manager: false
        });

        await this.ormRepository.save(user);

        return user;
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }


    public async findByid(id: string): Promise<user | undefined> {
        const user = await this.ormRepository.findOne(id);
        return user;
    }

    public async findByEmail(email: string): Promise<user | undefined> {
        const user = await this.ormRepository.findOne({ email: email });
        return user;
    }

    public async index(): Promise<user[] | undefined> {
        const user = await this.ormRepository.find();
        return user;
    }

    public async save(data: user): Promise<user> {
        const user = await this.ormRepository.save(data);
        return user;
    }
}

export default UserRepository;
