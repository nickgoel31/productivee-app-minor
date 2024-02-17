"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteTodoInDB = async (id:string) => {
    
    await db.toDo.delete({
        where: {id}
    })

    revalidatePath("/")
}

export const deleteAllTodoIsDone = async (id:string) => {
    await db.toDo.delete({
        where: {
            id,
            isDone: true,
        }
    })
}