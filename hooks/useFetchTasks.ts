import { getAllTasksInWorkspace } from "@/helpers/getTask"
import { Task } from "@/types/kanban"
import { useEffect, useState } from "react"

const useFetchTasks = async ({workspaceId} : {workspaceId:string}) => {
    const [tasks, setTasks] = useState<Task | null>(null)

    const tasksDb = await getAllTasksInWorkspace(workspaceId);

    setTasks(tasksDb);



    return {tasks};

}