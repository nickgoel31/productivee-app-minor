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
