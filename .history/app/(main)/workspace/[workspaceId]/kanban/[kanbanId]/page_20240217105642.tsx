import { getTaskById } from '@/helpers/getTask';
import { Task } from '@/types/kanban';
import React from 'react'

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = async ({params} : KanbanParams) => {

    const {workspaceId, kanbanId} = params

    const task = await getTaskById(kanbanId,workspaceId);

    console.log(task)
    

  return (
    <div>

    </div>
  )
}

export default KanbanTaskPage