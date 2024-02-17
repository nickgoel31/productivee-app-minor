"use server"

import { z } from "zod"

const editSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    }),
    priority: z.number()
})

export const editKanbanSubtaskInDB = (values: z.infer<typeof editSubTaskSchema>) => {

}