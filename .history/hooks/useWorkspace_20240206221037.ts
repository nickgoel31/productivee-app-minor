import { getWorkspace } from "@/actions/get-workspace";
import { useState } from "react";

export default function useWorkspace(id:string){
    const workspaceId = id;

    const workspace = getWorkspace(workspaceId)

    return workspace
}