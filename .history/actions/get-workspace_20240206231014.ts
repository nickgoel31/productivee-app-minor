"use server"

import { db } from "@/lib/db"

interface IParams {
    listingId?: string;
}


export const getWorkspaceById = async (params: IParams) => {
    const {listingId} = params;
    const workspace = await db.workspace.findUnique({
        where:{
            id: listingId
        },
        include:{
            todos:true
        }
    })

    if(!workspace) {
        return null;
    }
    
    return {
        ...workspace,
        createdAt: workspace.createdAt.toISOString(),
    }
}