import { db } from "@/lib/db"

export const getAllWorkspaces = async () => {
    const workspaces = await db.workspace.findMany();

    return workspaces;
}


export const getWorkspaceById = async (id: string) => {
    const workspace = await db.workspace.findUnique({ where: { id }})

    return workspace;
}
