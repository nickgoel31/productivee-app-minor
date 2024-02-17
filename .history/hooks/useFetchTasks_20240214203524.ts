import { getAllTasksInWorkspace } from "@/helpers/getTask"
import { useEffect, useState } from "react"

const useFetchTasks = ({workspaceId} : {workspaceId:string}) => {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        getAllTasksInWorkspace(workspaceId);
    },[])





}