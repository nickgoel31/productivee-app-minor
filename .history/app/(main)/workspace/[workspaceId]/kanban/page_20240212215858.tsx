import React from 'react'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div className='flex flex-col gap-8 py-7 pr-10'>
        <div className='space-y-1'>
            <h1 className='text-2xl font-semibold'>Kanban Board</h1>
            <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-center'>
            <div className=''>
                <div className='w-full items-center justify-between flex'>
                    <h2 className='text-lg font-semibold text-neutral-500'>ON HOLD</h2>
                    <p className='text-neutral-400'>3</p>
                </div>
            </div>
            
            <div className=''>
                <div className='w-full items-center justify-between flex'>
                    <h2 className='text-lg font-semibold text-yellow-200/80'>TODO</h2>
                    <p className='text-neutral-400'>3</p>
                </div>
            </div>

            <div className=''>
                <div className='w-full items-center justify-between flex'>
                    <h2 className='text-lg font-semibold text-blue-500'>IN PROGRESS</h2>
                    <p className='text-neutral-400'>3</p>
                </div>
            </div>

            <div className=''>
                <div className='w-full items-center justify-between flex'>
                    <h2 className='text-lg font-semibold text-green-400'>COMPLETED</h2>
                    <p className='text-neutral-400'>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KanbanPage