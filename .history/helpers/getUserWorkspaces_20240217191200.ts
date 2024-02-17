"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"

export const getUserWorkspaces = async () => {
    const {userId} = auth()

    if(!userId) return;

    const workspaces = await db.workspace.findMany({
        where:{
            userId
        }
    })
}