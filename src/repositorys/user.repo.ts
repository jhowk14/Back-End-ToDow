import prisma from "../services/prisma";
import { z } from 'zod'

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().nonempty('O email é obrigatório').email(),
    password: z.string().nonempty('A senha é obrigatória'),
    task: z.number()
})

export type CreateUserType = z.infer<typeof createUserSchema>;

export const createUserRepo = async (data: CreateUserType) => {
    try {
        const userData = createUserSchema.parse(data);
        const user = await prisma.user.create({
            data: userData
        });
        return user;
    } catch (e) {
        return e;
    }
}
