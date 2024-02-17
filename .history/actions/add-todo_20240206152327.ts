"use server"

import { db } from "@/lib/db"

export const addTodoInDB = async (title: string) => {
    
    await db.toDo.create({
        data: {
            title
        }
    })

    revalidatePath("/")
}