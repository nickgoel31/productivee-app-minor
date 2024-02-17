"use server"

import { db } from "@/lib/db"

export const deleteCompletedTasks = async (colId:number) => {
    await db.task.deleteMany({
        where:{
            columnId: colId
        }
    })
}