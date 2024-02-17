import { db } from "@/lib/db"

export const getAllSubtasks = async () => {
    const subTasks = await db.subTask.findMany();

    return subTasks;
}