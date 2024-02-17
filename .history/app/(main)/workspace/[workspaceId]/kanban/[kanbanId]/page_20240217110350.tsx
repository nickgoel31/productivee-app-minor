import { Button } from '@/components/ui/button';
import { getTaskById } from '@/helpers/getTask';
import { Task } from '@/types/kanban';
import { StepBack } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
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

    if(!task) redirect("/workspace")
    

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
        <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>{task.title}</h2>
          <p className='text-sm text-muted-foreground'>
            Drag and drop tasks to organize them in columns.
          </p>
        </div>

        <div className='flex gap-4 items-center'>
            <Button variant={"outline"} asChild>
                <Link href={`/workspace/${workspaceId}`}>
                    <StepBack size={17} className='mr-1'/> 
                    Go back
                </Link>
            </Button>

          {/* <AddNewTaskKanban workspaceId={workspaceId}/> */}
        </div>
      </div>
    </div>
  )
}

export default KanbanTaskPage