"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const deleteLegacyTaskInDB = async (id:string) => {

    
    await db.legacyTask.delete({
        where:{id},
    })

    revalidatePath("/")
}