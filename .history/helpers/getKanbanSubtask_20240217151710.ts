"use server"

import { db } from "@/lib/db"

export const getAllKanbanSubtasksByTaskId = async (taskId:string) => {
    const subtasks = await db.kanbanSubtask.findMany({
        where:{
            taskId
        }
    })

    if(!subtasks) return;

    return subtasks;
}