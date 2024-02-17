"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const newTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})


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