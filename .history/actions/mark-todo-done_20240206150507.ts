"use server"

import { db } from "@/lib/db"

export const markTodoDone = async (id: string) => {
    
    await db.toDo.update({
        where: {id},
        data:{
            isDone: true
        }
    })
}

export const markTodoNotDone = async (id: string) => {
    
    await db.toDo.update({
        where: {id},
        data:{
            isDone: false
        }
    })
}