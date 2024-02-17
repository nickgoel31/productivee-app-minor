"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const updateSubTaskInDB = async (id:string, isDone:boolean) => {

    
    await db.subTask.update({
        where:{id},
        data:{
            isDone
        }
    })

    revalidatePath("/")
}

export const updateAllSubTaskInDB = async (isDone:boolean) => {

    
    await db.subTask.updateMany({
        data:{
            isDone
        }
    })

    revalidatePath("/")
}