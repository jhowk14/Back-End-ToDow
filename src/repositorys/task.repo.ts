import prisma from "../services/prisma";
import { z } from 'zod'

export const createTaskSchema = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    status: z.boolean(),
    description: z.string().nonempty("Descrição obrigatória"),
    image: z.string().optional(),
    userId: z.number()
})

export type createTaskType = z.infer<typeof createTaskSchema>;

export default class TaskRepository {
async createTaskRepo(data: createTaskType){
    try {
        const taskData = createTaskSchema.parse(data);
        const task = await prisma.task.create({
            data: taskData
        });

        return task;
    } catch (e) {
        throw e; 
    }
}
async getTasks(
    userId: number,
    taskId?: number
){
    try {
        const tasks = await prisma.task.findMany({
            where: {
              ...({ userId}),
              ...(taskId ? { id: taskId } : {}),
            },
            include: {
              user: true, 
            },
          });

        return tasks;
    } catch (e) {
        throw e; 
    }
}

async updateTaskById(taskId: number, data: Partial<createTaskType>){
    try {
        const task = await prisma.task.update({
            where: {
                id: taskId
            },
            data: data
        });

        return task;
    } catch (e) {
        throw e;
    }
}

async deleteTaskById (taskId: number){
    try {
        const task = await prisma.task.delete({
            where: {
                id: taskId
            }
        });

        return task;
    } catch (e) {
        throw e; 
    }
}
}