import { db } from "@/lib/db"

export const getAllWorkspaces = async () => {
    const workspaces = await db.workspace.findMany();

    return workspaces;
}

