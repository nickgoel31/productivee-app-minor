"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addWorkspaceInDB = async (name: string, description:string | null) => {
    
    await db.workspace.create({
        data: {
            name,
            description
        }
    })

    revalidatePath("/")
}