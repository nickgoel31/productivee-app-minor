import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div className='flex flex-col gap-8 py-7 pr-10 h-full'>
        <div className='flex items-center justify-between'>
            <div className='space-y-1'>
                <h1 className='text-2xl font-semibold'>Kanban Board</h1>
                <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
            </div>

            <div className='add'>
                <Button className='' variant={"outline"}>Add a new task +</Button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-start h-full'>

            <KanbanColumn />
            <KanbanColumn />
            <KanbanColumn />
            <KanbanColumn />
            
        </div>
    </div>
  )
}

export default KanbanPage