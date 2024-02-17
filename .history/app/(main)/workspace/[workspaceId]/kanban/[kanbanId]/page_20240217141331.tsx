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
    <div className='flex flex-col gap-4 pr-10 py-6'>
        <div className='flex items-center w-full justify-between'>
            <div className='space-y-1'>
              <h2 className='text-2xl font-semibold'>{task.title}</h2>
              <div className='flex items-center gap-1'>
                {task.tags.map((tag) => (
                  <div className='text-xs font-medium p-1 px-3 rounded-full border'>
                    {tag}
                  </div>
                ))}
              </div>
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

      <div>
        <div className='flex flex-col item'>
            <p className=' text-muted-foreground text-sm'>
            {task.description}
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default KanbanTaskPage