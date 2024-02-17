"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const getAllSubTasksByTaskId = async (taskId:string) => {

    const subtasks = await db.subTask.findMany({
        where: {
            legacyTaskId: taskId,
        },
    })

    if(!subtasks) return null;

    revalidatePath("/")

    return subtasks;
}

export const getAllSubTasks = async () => {

    const subtasks = await db.subTask.findMany()

    if(!subtasks) return null;

    revalidatePath("/")

    return subtasks;
}
