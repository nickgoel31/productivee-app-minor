"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title should not be blank"
    })
  })

export const updateTodoInDB = async (values:z.infer<typeof formSchema>, id:string) => {
    
    await db.toDo.update({
        where: {id},
        data:{
            title:values.title
        }
    })

    revalidatePath("/")
}