import prisma from "../services/prisma";
import { z } from 'zod'

export const createTaskSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    status: z.string().nonempty(),
    description: z.string().nonempty("Descrição obrigatória"),
    date: z.date(),
    image: z.string(),
    userId: z.number()
})

export type createTaskType = z.infer<typeof createTaskSchema>;

export const createTaskRepo = async (data: createTaskType) => {
    try {
        const taskData = createTaskSchema.parse(data);
        const task = await prisma.task.create({
            data: taskData
        });

        return task;
    } catch (e) {
        return e;
    }
}
