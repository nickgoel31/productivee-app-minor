"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"


export const deleteWorkspaceInDB = async (id: string) => {

    const {userId} = auth();
    
    await db.workspace.delete({
        where: {id}
    })

    return {success:true}

}