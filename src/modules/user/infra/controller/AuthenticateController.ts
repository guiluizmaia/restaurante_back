import { Request, Response } from 'express';
import AppError from '../../../../infra/errors/AppError';
import { container } from 'tsyringe';
import AuthenticateUserService from '../../services/AuthenticateUserService';


class AuthenticateController {
    public async login(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password } = request.params;

        const authenticateUserService = container.resolve(
            AuthenticateUserService,
        );

        const user = await authenticateUserService.execute({
            email, password
        });

        if(!user){
            throw new AppError('Login Error')
        }

        return response.status(201).json(user);
    }

}


export default AuthenticateController;
