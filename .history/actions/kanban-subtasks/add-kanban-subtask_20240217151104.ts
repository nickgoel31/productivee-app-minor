"use server"

import { z } from "zod"

const newSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

export const addKanbanSubtaskInDB = (values:z.infer<typeof newSubTaskSchema>) => {

}