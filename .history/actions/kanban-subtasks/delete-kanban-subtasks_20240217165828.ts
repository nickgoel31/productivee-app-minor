"use server"

import { db } from "@/lib/db"

export const deleteKanbanSubtaskById = async (id:string) => {
    await db.kanbanSubtask.delete({
        where:{
            id
        }
    })
}