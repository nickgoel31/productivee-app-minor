"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const getAllTasksInWorkspace = async (workspaceId:string) => {

    const tasks = await db.task.findMany({
        where: {
            workspaceId
        },
    })

    if(!tasks) return null;

    revalidatePath("/")

    return tasks;
}

export const getTaskById = async (taskId: string, workspaceId:string) => {
    const task = await db.task.findUnique({
        where:{
            id: taskId,
            workspaceId
        }
    }) 

    if(!task) return {error: "Could not fetch task right now!"}
}
