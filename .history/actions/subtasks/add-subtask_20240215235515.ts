"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const formSchema = z.object({
  title: z.string().min(1,{
      message:"Title is required"
  })
})

export const addSubTaskInDB = async (values: z.infer<typeof formSchema>,taskId:string) => {

    const {title} = values
    
    await db.subTask.create({
        data: {
            title,
            todoId
        }
    })

    revalidatePath("/")
}