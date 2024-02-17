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