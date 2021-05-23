import AppError from '../../../infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import IAuth from '../dtos/IAuth';
import user from '../infra/typeorm/schemas/user';
import IUserRepository from '../repositories/IUserRepository';

interface IResponse {
    user: user,
    token: string
}

@injectable()
class AuthenticateUserService {
    private userRepository: IUserRepository;

    constructor(
        @inject('UserRepository')
        userRepository: IUserRepository,
    ) {
        this.userRepository = userRepository;
    }
    public async execute({ email, password }: IAuth): Promise<IResponse> {
        const userVerify = await this.userRepository.findByEmail(email);

        if (!userVerify) {
            throw new AppError('Email or password incorrect');
        }

        const pass = await compare(password, userVerify.password);

        if (pass === false) {
            throw new AppError('Email or password incorrect');
        }

        const token = sign({}, "0c99e4e3313e66a7e1965f73d1a67495", {
            subject: (userVerify.id).toString(), expiresIn: "1d",
        });

        return { user: userVerify, token };
    }
}

export default AuthenticateUserService;
