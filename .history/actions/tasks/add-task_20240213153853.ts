"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    })
})

export const addTaskInDB = async (values: z.infer<typeof formSchema>, workspaceId:string) => {

    const validatedFields = formSchema.safeParse(values);

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