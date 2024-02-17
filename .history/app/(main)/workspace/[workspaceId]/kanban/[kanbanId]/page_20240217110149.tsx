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
    

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>

    </div>
  )
}

export default KanbanTaskPage