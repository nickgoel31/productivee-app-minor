import { Button } from '@/components/ui/button';
import { getTaskById } from '@/helpers/getTask';
import { Column, Task } from '@/types/kanban';
import { StepBack } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import EditTaskKanban from '../../_components/kanban/edit-task-kanban';
import { getColumnById } from '@/helpers/getColumn';

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = async ({params} : KanbanParams) => {

    const {workspaceId, kanbanId} = params

    const task = await getTaskById(kanbanId,workspaceId);

    if(!task) redirect("/workspace")

    const column:Column = getColumnById(task.columnId)
    

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
        <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>{task.title}</h2>
          <p className='text-xs text-muted-foreground'>
            {task.description}
          </p>
        </div>

        <div className='flex gap-4 items-center'>
            <Button variant={"outline"} asChild>
                <Link href={`/workspace/${workspaceId}`}>
                    <StepBack size={17} className='mr-1'/> 
                    Go back
                </Link>
            </Button>

          <EditTaskKanban workspaceId={workspaceId} task={task} col={column}/>
        </div>
      </div>
    </div>
  )
}

export default KanbanTaskPage