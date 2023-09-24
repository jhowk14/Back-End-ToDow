import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ApiError } from '../helpers/erroHelper';

const jwtSecret = process.env.JWT_SECRET;

export const authAuthorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    const apiKey = req.headers['api_key']; // Use letras minúsculas para a chave 'apikey'

    if (!token && !apiKey) {
        throw new ApiError("Authorization token or API key is missing", 401);
    }

    if (typeof jwtSecret === 'undefined') {
        throw new ApiError("JWT_SECRET is not defined", 500);
    }

        if (token) {
            const decodedToken = verify(token, jwtSecret);
            // Adicione o usuário autenticado ao objeto de solicitação para que as rotas subsequentes possam acessá-lo
            req.userId = decodedToken;
        } else if (apiKey === process.env.API_KEY) {
            req.userId = 'dev'
        } else {
            throw new ApiError("Unauthorized", 402);
        }

        next(); // Avança para a próxima função middleware ou rota
};
