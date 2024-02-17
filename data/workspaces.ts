import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";

export const getAllWorkspaces = async (userId:string) => {

    // const {userId} = auth()

    // if(!userId) return Response.redirect(new URL("/sign-in"))
    


    const workspaces = await db.workspace.findMany({
        where:{
            userId
        }
    });

    return workspaces;
}

export const getWorkspaceById = async (workspaceId: string, userId:string) => {
    const workspaces = await db.workspace.findUnique({
        where:{
            userId,
            id:workspaceId
        }
    });

    return workspaces;
}

