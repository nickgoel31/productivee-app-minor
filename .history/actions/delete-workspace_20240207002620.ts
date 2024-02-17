"use server"

import { getAllWorkspaces } from "@/data/workspaces"
import { db } from "@/lib/db"
import { WorkspaceSchema } from "@/schemas"
import { revalidatePath } from "next/cache"
import { NextURL } from "next/dist/server/web/next-url"
import { z } from "zod"

export const deleteWorkspaceInDB = async (id: string) => {

    
    await db.workspace.delete({
        where: {id}
    })

    Response.redirect(new URL("/workspace", "http://localhost:3000"))

}