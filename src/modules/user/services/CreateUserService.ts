import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { hash } from "bcrypt";

import IUser from '../dtos/IUser';
import user from '../infra/typeorm/schemas/user';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
    private userRepository: IUserRepository;

    constructor(
        @inject('UserRepository')
        userRepository: IUserRepository,
    ) {
        this.userRepository = userRepository;
    }
    public async execute({ email, password, name, tel, cel, rg, cpf, adress, date }: IUser): Promise<user> {
        const userVerify = await this.userRepository.findByEmail(email);

        if (userVerify) {
            throw new AppError('Email already exists');
        }

        const pass = await hash(password, 8);

        const user = await this.userRepository.create({
            email, password: pass, name, tel, cel, rg, cpf, adress, date
        })

        return user;
    }
}

export default CreateUserService;
