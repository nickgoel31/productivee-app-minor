
import { Button } from '@/components/ui/button'
import { Plus, StepBackIcon } from 'lucide-react'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { ScrollArea } from '@/components/ui/scroll-area'
import AddCard from '../_components/kanban/add-kanban-card'
import { getAllSubtasks } from '@/data/subtasks'
import { getAllTasksInWorkspace } from '@/helpers/getTask'

const KanbanPage = async ({params}: {params: { workspaceId: string }}) => {

  const workspaceId = params.workspaceId;

  const tasks = await getAllTasksInWorkspace(workspaceId)

  const todoTasks = tasks?.filter(t => {
    return t.status === "TODO"
  })


  return (
    <ScrollArea className='h-full  w-full pr-10 '>
        <div className='flex flex-col gap-8 py-7 h-full w-full'>
        <div className='flex items-center justify-between'>
            <div className='space-y-1'>
                <h1 className='text-2xl font-semibold'>Kanban Board</h1>
                <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
            </div>

            <div className='flex items-center gap-4'>
                <AddCard workspaceId={workspaceId}/>
                <Button className='flex items-center gap-1 group' variant={"outline"}>
                  <StepBackIcon size={17} className='group-hover:-translate-x-1 transition'/> Back to workspace
                </Button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-start h-full'>

            <KanbanColumn 
            colTitle="ON HOLD"
            colKey="ON_HOLD"
            headingColor="text-neutral-500"
            {...todoTasks}
             />

            <KanbanColumn 
            colTitle="TODO"
            colKey="TODO"
            headingColor="text-yellow-300/70"
            />

            <KanbanColumn 
            colTitle="IN PROGRESS"
            colKey="IN_PROGRESS"
            headingColor="text-blue-400/70"
            />

            <KanbanColumn 
            colTitle="COMPLETED"
            colKey="COMPLETED"
            headingColor="text-green-400/70"
            />
            
        </div>
    </div>
    </ScrollArea>
  )
}

export default KanbanPage



