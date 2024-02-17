"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addSubTaskInDB = async (title: string,todoId:string) => {
    
    await db.subTask.create({
        data: {
            title,
            todoId
        }
    })

    revalidatePath("/")
}