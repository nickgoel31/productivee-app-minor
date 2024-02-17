"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const LegacyTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})


export const addLegacyTaskInDB = async (values: z.infer<typeof LegacyTaskSchema>, workspaceId:string) => {

    const validatedFields = LegacyTaskSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Something went wrong"}
    }

    const {title} = validatedFields.data

    await db.legacyTask.create({
        data: {
            title,
            workspaceId
        }
    })

    revalidatePath("/")
}