import prisma from "../services/prisma";
import { z } from 'zod'
import bcrypt from 'bcrypt';

export const createUserSchema = z.object({
    name: z.string().nonempty('O nome e obrigatorio'),
    email: z.string().nonempty('O email é obrigatório').email("email invalido"),
    password: z.string().min(8).nonempty('A senha é obrigatória'),
    task: z.number().optional()
})
export const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("email invalido").optional(),
    password: z.string().min(8).optional(),
    task: z.number().optional()
})
export type CreateUserType = z.infer<typeof createUserSchema>;

export const createUserRepo = async (data: CreateUserType) => {
    try {
        const userData = createUserSchema.parse(data);
        userData.password = await bcrypt.hash(userData.password, 12);

        const user = await prisma.user.create({
            data: userData
        });
        return user;
    } catch (e) {
        throw e;
    }
}
export const getUserById = async (userId: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        return user;
    } catch (e) {
        throw e; 
    }
}
export const getAllUser = async () => {
    try {
        const user = await prisma.user.findMany();

        return user;
    } catch (e) {
        throw e; 
    }
}
export const updateUserById = async (userId: number, data: Partial<CreateUserType>) => {
    try {
        const userData = updateUserSchema.parse(data);
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...userData,
                password: userData.password ? await bcrypt.hash(userData.password, 12) : undefined
            }
        });

        return user;
    } catch (e) {
        throw e; 
    }
}
export const deleteUserById = async (userId: number) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: userId
            }
        });

        return user;
    } catch (e) {
        throw e;
    }
}
