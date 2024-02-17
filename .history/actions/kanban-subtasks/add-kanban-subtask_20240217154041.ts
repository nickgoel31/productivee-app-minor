"use server"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod"

const newSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

export const addKanbanSubtaskInDB = async (values:z.infer<typeof newSubTaskSchema>,taskId:string) => {
    const validatedFields = newSubTaskSchema.safeParse(values);

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {title} = validatedFields.data

    await db.kanbanSubtask.create({
        data:{
            taskId,
            title
        }
    })

    revalidatePath("/")
}