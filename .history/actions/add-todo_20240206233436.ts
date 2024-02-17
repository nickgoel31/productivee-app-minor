"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addTodoInDB = async (title: string,workspaceId:string) => {
    
    await db.toDo.create({
        data: {
            title,
            workspaceId
        }
    })

    revalidatePath("/")
}