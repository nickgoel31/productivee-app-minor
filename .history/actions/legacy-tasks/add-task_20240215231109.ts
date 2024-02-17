"use server"

import { z } from "zod"

const LegacyTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})


export const addLegacyTaskInDB = (values: z.infer<typeof LegacyTaskSchema>) => {

}