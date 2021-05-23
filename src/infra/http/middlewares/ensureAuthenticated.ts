import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken"
import UserRepository from '../../../modules/user/infra/typeorm/repositories/UserRepository';
import AppError from '../../../infra/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing');
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, '0c99e4e3313e66a7e1965f73d1a67495') as IPayload;

        const userRepository = new UserRepository();
        const user = userRepository.findByid(user_id);

        if (!user) {
            throw new AppError('Invalid token');
        }

        next();
    } catch {
        throw new AppError('Invalid token');
    }

}