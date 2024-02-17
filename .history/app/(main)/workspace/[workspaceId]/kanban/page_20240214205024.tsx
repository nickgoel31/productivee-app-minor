import { Button } from '@/components/ui/button';
import { StepBack } from 'lucide-react';
import React from 'react'

const KanbanPage = ({params}: {params: {workspaceId:string}}) => {

  const {workspaceId} = params;

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>

      <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>Kanban Board</h2>
          <p className='text-sm text-muted-foreground'>
            Drag and drop tasks to organize them in columns.
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <Button variant={"outline"}>Add a new task +</Button>
          <Button variant={"outline"}><StepBack size={17} className='mr-1'/> Go back</Button>
        </div>
      </div>



    </div>
  )
}

export default KanbanPage