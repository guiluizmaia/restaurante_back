import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { hash } from "bcrypt";

import IUser from '../dtos/IUser';
import user from '../infra/typeorm/schemas/user';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class DeleteUserService {
    private userRepository: IUserRepository;

    constructor(
        @inject('UserRepository')
        userRepository: IUserRepository,
    ) {
        this.userRepository = userRepository;
    }
    public async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}

export default DeleteUserService;
