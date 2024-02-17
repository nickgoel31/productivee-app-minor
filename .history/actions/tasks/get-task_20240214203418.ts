import { db } from "@/lib/db";
import { Id } from "@/types/kanban";

export const getAllTasksInWorkspace = async (workspaceId: string) => {
    try {
        const tasks = await db.task.findMany({
            where:{
                workspaceId
            }
        })

        return tasks;


    } catch (error) {
        return {message: error}
    }
}