"use server"

import { z } from "zod"

const newSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

export const addKanbanSubtaskInDB = async (values:z.infer<typeof newSubTaskSchema>,id:string,taskId:string) => {

}