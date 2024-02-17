"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteCompletedTasks = async () => {
    await db.task.deleteMany({
        where:{
            columnId: 4
        }
    })

    revalidatePath("/")
}

export const deleteTaskById = async (id: string, workspaceId:string) => {
    await db.task.delete({
        where: {
            id,
            workspaceId
        }
    })

    revalidatePath("/")
}