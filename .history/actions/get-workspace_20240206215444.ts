"use server"

import { getWorkspaceById } from "@/data/workspaces"

export const getWorkspace = async (id: string) => {
    const workspace = await getWorkspaceById(id);
    return workspace;
}