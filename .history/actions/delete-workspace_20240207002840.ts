"use server"

import { db } from "@/lib/db"


export const deleteWorkspaceInDB = async (id: string) => {

    
    await db.workspace.delete({
        where: {id}
    })

    return {success:true}

}