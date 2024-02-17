import { getWorkspace } from "@/actions/get-workspace";
import { useState } from "react";

export default async function useWorkspace(id:string){
    const workspaceId = id;

    const workspace = await getWorkspace(workspaceId)

    return workspace
}