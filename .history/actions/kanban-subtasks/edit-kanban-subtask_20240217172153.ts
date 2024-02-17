"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const editSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    }),
    priority: z.number()
})

export const editKanbanSubtaskInDB = async (values: z.infer<typeof editSubTaskSchema>, id:string) => {

    const validatedFields =  editSubTaskSchema.safeParse(values)

    if(!validatedFields.success) return {error:"Something went wrong"}

    const {title,priority} = validatedFields.data

    await db.kanbanSubtask.update({
        where:{
            id
        },
        data:{
            title,
            priority
        }
    })

    revalidatePath("/")
}

export const updateIsDoneKanbanSubtaskInDB = async (id:string, isDone:boolean) => {
    await db.kanbanSubtask.update({
        where:{
            id
        },
        data:{
            isDone
        }
    })

    revalidatePath("/")
}