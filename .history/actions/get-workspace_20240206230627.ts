"use server"

import { db } from "@/lib/db"


export const getWorkspaceById = async (id: string) => {
    const workspace = await db.workspace.findUnique({
        where:{
            id
        },
        include:{
            todos:true
        }
    })
    
    return workspace;
    
}