import React from 'react'

const KanbanPage = ({params}: {params: {workspaceId:string}}) => {

  const {workspaceId} = params;

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
      <div className='space-y-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-sm text-muted-foreground'>
          Drag and drop tasks to organize them in columns.
        </p>
      </div>
    </div>
  )
}

export default KanbanPage