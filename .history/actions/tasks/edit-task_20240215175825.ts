"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const editTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]).optional(),
    columnId: z.number()
})


export const editTaskInDB = async (values: z.infer<typeof editTaskSchema>, id:string, workspaceId:string) => {

    const validatedFields = editTaskSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Something went wrong" };

    const {title,description,tags,columnId} = validatedFields.data;
    
    await db.task.update({
        where:{
            id,
            workspaceId
        },
        data:{
            title,
            description,
            tags,
            columnId
        }
    })

    revalidatePath("/")
}