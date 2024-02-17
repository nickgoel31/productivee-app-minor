"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteCompletedTasks = async (workspaceId:string) => {

    const completedColumnId = 4;

    try {
        await db.task.deleteMany({
            where:{
                columnId: completedColumnId,
                workspaceId
            }
        })
    
        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }
}

export const deleteTaskById = async (id: string, workspaceId:string) => {
    await db.task.delete({
        where: {
            id,
            workspaceId
        },
    })

    revalidatePath("/")
}