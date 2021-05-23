import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import IUser from '../dtos/IUser';
import user from '../infra/typeorm/schemas/user';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest extends IUser {
    id: string
}

@injectable()
class UpdateUserService {
    private userRepository: IUserRepository;

    constructor(
        @inject('UserRepository')
        userRepository: IUserRepository,
    ) {
        this.userRepository = userRepository;
    }
    public async execute({ id, email, password, name, tel, cel, rg, cpf, adress, date }: IRequest): Promise<user> {
        const user = await this.userRepository.findByid(id);

        if (!user) {
            throw new AppError("User not found")
        }

        user.email = email;
        user.password = password;
        user.name = name;
        user.tel = tel;
        user.cel = cel;
        user.rg = rg;
        user.cpf = cpf;
        user.adress = adress;
        user.date = date;

        const userup = await this.userRepository.save(user);

        return userup;
    }
}

export default UpdateUserService;
