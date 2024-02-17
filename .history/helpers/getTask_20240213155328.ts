"use server"

import { db } from "@/lib/db"

const getAllTasksInWorkspace = async (workspaceId:string) => {

    const tasks = await db.task.findMany({
        where: {
            workspaceId
        },
        include: {
            subtasks: true
        }
    })

    if(!tasks) return null;

    return tasks;
}
