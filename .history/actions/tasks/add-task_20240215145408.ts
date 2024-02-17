"use server"

import { newTaskSchema } from "@/app/(main)/workspace/[workspaceId]/_components/kanban/kanban-add-new-task-btn"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"


export const addTaskInDB = async (values: z.infer<typeof newTaskSchema>, workspaceId:string) => {

    const validatedFields = newTaskSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Something went wrong" };

    const {title} = validatedFields.data;
    
    await db.task.create({
        data: {
            title,
            workspaceId,
        }
    })

    revalidatePath("/")
}