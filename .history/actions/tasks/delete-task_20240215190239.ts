"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache"

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

        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }

}