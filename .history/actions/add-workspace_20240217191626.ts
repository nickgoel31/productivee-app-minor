"use server"

import { getAllWorkspaces } from "@/data/workspaces"
import { checkMaxWorkspacesByUserId } from "@/helpers/max-workspaces"
import { db } from "@/lib/db"
import { WorkspaceSchema } from "@/schemas"
import { auth } from "@clerk/nextjs"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export interface Workspace {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    createdAt: Date;
    // Add any other properties if necessary
}

export const addWorkspaceInDB = async (values: z.infer<typeof WorkspaceSchema>, imageUrl: string) => {
    const validatedFields = WorkspaceSchema.safeParse(values);
    const { userId } = auth();

    if (!userId) return Response.redirect(new URL("/sign-in"));

    let existingWorkspaces: Workspace[] = [];
    const workspacesResponse = await getAllWorkspaces(userId);

    if (Array.isArray(workspacesResponse)) {
        existingWorkspaces = workspacesResponse; // Assign if it's an array of workspaces
    } else {
        // Handle the case where it's a Response object (e.g., error response)
        // You might want to return an error or handle it based on your requirements
        return { error: "Failed to fetch existing workspaces" };
    }

    if (!validatedFields.success) return { error: "Something went wrong" };

    const { name, desc } = validatedFields.data;

    if (existingWorkspaces.length >= 6) {
        return { error: "Cannot create more than six workspaces." };
    }

    const isWorkspacesLimitExceeded = await checkMaxWorkspacesByUserId();

    if(isWorkspacesLimitExceeded) return;

    await db.workspace.create({
        data: {
            name,
            description: desc,
            userId,
            imageUrl
        }
    });

    revalidatePath("/");
}