"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const getAllLegacyTasksInWS = async (workspaceId:string) => {

    const tasks = await db.legacyTask.findMany({
        where: {
            workspaceId
        },
    })

    if(!tasks) return null;

    revalidatePath("/")

    return tasks;
}
