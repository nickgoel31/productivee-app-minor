import React from 'react'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div className='flex flex-col gap-8 py-7 pr-10'>
        <div className='space-y-1'>
            <h1 className='text-2xl font-semibold'>Kanban Board</h1>
            <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
        </div>
    </div>
  )
}

export default KanbanPage