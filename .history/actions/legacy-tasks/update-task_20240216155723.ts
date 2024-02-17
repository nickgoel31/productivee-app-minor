"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const updateLegacyTaskInDB = async (id:string, isDone:boolean) => {

    
    await db.legacyTask.update({
        where:{id},
        data:{
            isDone
        }
    })

    revalidatePath("/")
}