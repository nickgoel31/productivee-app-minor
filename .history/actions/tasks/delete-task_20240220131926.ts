"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export const deleteCompletedTasks = async (workspaceId:string) => {

    const completedColumnId = 4;

    try {
        await db.task.deleteMany({
            where:{
                columnId: completedColumnId,
            }
        })

        revalidatePath("/")

    } catch (error) {
        console.log(error)
    }
}

export const deleteTaskById = async (id: string, workspaceId:string) => {
    try {
        await db.task.delete({
            where: {
                id: id,
            },
        })

        redirect(`/workspace/${workspaceId}/kanban`)
    } catch (error) {
        console.log(error)
    }

}