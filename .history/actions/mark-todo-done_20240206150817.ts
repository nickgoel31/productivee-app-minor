"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const markTodoDone = async (id: string) => {
    
    await db.toDo.update({
        where: {id},
        data:{
            isDone: true
        }
    })

    revalidatePath("/")
}

export const markTodoNotDone = async (id: string) => {
    
    await db.toDo.update({
        where: {id},
        data:{
            isDone: false
        }
    })
    revalidatePath("/")
}