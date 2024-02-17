"use server"

import { db } from "@/lib/db"


export const deleteWorkspaceInDB = async (id: string) => {

    
    await db.workspace.delete({
        where: {id}
    })

    return Response.redirect(new URL("/workspace","http://localhost:3000"))

}