import { getWorkspace } from "@/actions/get-workspace";
import { useState } from "react";

export default function useWorkspace(id:string){
    const workspaceId = id;

    getWorkspace(workspaceId)


    const workspace = ''

    return workspace
}