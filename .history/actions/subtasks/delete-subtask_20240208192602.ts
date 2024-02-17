"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const deleteSubTaskInDB = async (id:string) => {

    
    await db.subTask.delete({
        where:{id}
    })

    revalidatePath("/")
}