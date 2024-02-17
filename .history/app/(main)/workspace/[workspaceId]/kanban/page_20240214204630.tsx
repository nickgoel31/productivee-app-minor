import React from 'react'

const KanbanPage = ({params}: {params: {workspaceId:string}}) => {

  const {workspaceId} = params;

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
      <div className='space-y-2'>

      </div>
    </div>
  )
}

export default KanbanPage