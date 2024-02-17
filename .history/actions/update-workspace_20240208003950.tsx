"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Please enter a workspace name",
    }),
    description:z.string().optional()
  })



export const updateWorkspaceInDB = async (values: z.infer<typeof formSchema>,id:string) => {

    const {userId} = auth();

    const {name,description} = values

    if(!userId) return; // user is not authenticated
    
    await db.workspace.update({
        where: {id, userId},
        data:{name,description}
    })

    return {success:true}

}