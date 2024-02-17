"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addTodoInDB = async (title: string,workspaceId:string) => {
    
    await db.task.create({
        data: {
            title,
            workspaceId
        }
    })

    revalidatePath("/")
}