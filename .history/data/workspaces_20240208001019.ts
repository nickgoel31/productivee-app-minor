import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";

export const getAllWorkspaces = async () => {

    // const {userId} = auth()

    // if(!userId) return Response.redirect(new URL("/sign-in"))


    const workspaces = await db.workspace.findMany();

    return workspaces;
}

