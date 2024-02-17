"use server"

import { db } from "@/lib/db"
import { WorkspaceSchema } from "@/schemas"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const addWorkspaceInDB = async (values: z.infer<typeof WorkspaceSchema>) => {

    const validatedFields = WorkspaceSchema.safeParse(values);

    
    await db.workspace.create({
        data: {
            name,
            description
        }
    })

    revalidatePath("/")
}