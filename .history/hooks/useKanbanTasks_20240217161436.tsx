"use client"

import { getAllTasksInWorkspace } from "@/helpers/getTask";
import { Task } from "@/types/kanban";
import { useEffect, useState } from "react"

export const useKanbanTasks = ({workspaceId}:{workspaceId:string}) => {
    const [tasks,setTasks]= useState<Task[] | null>(null);

    useEffect(() => {
        async function getKanbanTasks(){
            let res = await getAllTasksInWorkspace(workspaceId);

            setTasks(res)
        }

        getKanbanTasks()
    },[])

    if(!tasks) return;

    return {tasks};
}