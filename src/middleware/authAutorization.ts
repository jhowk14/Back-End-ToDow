import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

export const authAuthorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    if (typeof jwtSecret === 'undefined') {
        return res.status(500).json({ message: 'JWT_SECRET is not defined' });
    }
    console.log(token)
    try {
        const decodedToken = verify(token, jwtSecret);

        // Adicione o usuário autenticado ao objeto de solicitação para que as rotas subsequentes possam acessá-lo
        req.userId = decodedToken;

        next(); // Avança para a próxima função middleware ou rota
    } catch (error) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
};
