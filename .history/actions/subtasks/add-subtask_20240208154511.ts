"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(2, {
      message: "Subtask can't be empty"
    }).max(50),
  })

export const addSubTaskInDB = async (values: z.infer<typeof formSchema>,todoId:string) => {

    const {title} = values
    
    await db.subTask.create({
        data: {
            title,
            todoId
        }
    })

    revalidatePath("/")
}