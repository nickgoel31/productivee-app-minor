import React from 'react'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div className='flex flex-col gap-8 py-6 pr-10'>
        <h1 className='text-xl font-semibold'>Kanban Board</h1>
    </div>
  )
}

export default KanbanPage