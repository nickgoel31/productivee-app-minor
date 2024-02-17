"use server"

import { getAllWorkspaces } from "@/data/workspaces"
import { db } from "@/lib/db"
import { WorkspaceSchema } from "@/schemas"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const addWorkspaceInDB = async (values: z.infer<typeof WorkspaceSchema>) => {

    const validatedFields = WorkspaceSchema.safeParse(values);

    const existingWorkspaces = await getAllWorkspaces()

    const {userId} = auth()

    if(!userId) return Response.redirect(new URL("/sign-in"))

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {name,desc} = validatedFields.data

    if(existingWorkspaces.length >= 6){
        return {error: "Cannot create more than six workspaces."}
    }
    
    await db.workspace.create({
        data: {
            name,
            description: desc
        }
    })

    revalidatePath("/")

}