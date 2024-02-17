"use server"

import { WorkspaceWithUserId } from "@/types";
import { getUserWorkspaces } from "./getUserWorkspaces";

// Assuming you have a function to retrieve the list of workspaces for a user
// For demonstration purposes, I'm assuming it's named getUserWorkspaces and takes a userId as input

export const checkMaxWorkspacesByUserId = async (workspace: WorkspaceWithUserId, userId: string): Promise<boolean> => {
    // Call a function to get the list of workspaces associated with the user
    const userWorkspaces = await getUserWorkspaces();
    
    // Count the number of workspaces associated with the user
    let userWorkspaceCount = userWorkspaces?.length;

    if(!userWorkspaceCount) {
        userWorkspaceCount = 0
    }
    
    // Check if the user can have more than two workspaces
    return userWorkspaceCount < 2;
};
