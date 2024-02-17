"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteKanbanSubtaskById = async (id:string) => {
    await db.kanbanSubtask.delete({
        where:{
            id
        }
    })

    revalidatePath("/")
}

export const deleteAllKanbanSubtaskInTask = async (taskId:string) => {
    await db.kanbanSubtask.deleteMany({
        where:{
            taskId
        }
    })

    revalidatePath("/")
}