import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ApiError } from '../helpers/erroHelper';

const jwtSecret = process.env.JWT_SECRET;

export const authAuthorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        throw new ApiError("Authorization token is missing", 401)
    }

    if (typeof jwtSecret === 'undefined') {
        throw new ApiError("JWT_SECRET is not defined", 500)

    }
    try {
        const decodedToken = verify(token, jwtSecret);
        // Adicione o usuário autenticado ao objeto de solicitação para que as rotas subsequentes possam acessá-lo
        req.userId = decodedToken;

        next(); // Avança para a próxima função middleware ou rota
    } catch (error) {
        throw new ApiError("Unauthorized", 402)

    }
};
