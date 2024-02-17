import { Column, Task } from '@/types/kanban'
import React from 'react'
import KanbanTaskCard from './kanban-task-card'
import { Button } from '@/components/ui/button';

interface Props{
    col: Column
    tasks: Task[];
    workspaceId: string;
}

const KanbanColumn = ({col, tasks, workspaceId}:Props) => {

    const filteredTasks = tasks.filter(t => t.columnId === col.id);

  return (
    <div className='w-full h-full flex flex-col gap-5 items-start justify-start py-2 px-3'>
        <div className='flex items-center justify-between w-full'>
            <h3 className={`font-medium ${col.colorScheme} `}>{col.title}</h3>
            <p className='text-muted-foreground text-sm'>{filteredTasks.length}</p>
        </div>

        <div className='flex flex-col gap-2 w-full'>
            {filteredTasks.map((t) => (
                <KanbanTaskCard task={t} col={col} workspaceId={workspaceId}/>
            ))}

            {col.id === 4 && (
                <div className='w-full flex items-center justify-end'>
                    <Button variant={"ghost"} className='hover:text-neutral-200 text-muted-foreground font-medium underline underline-offset-2 text-xs'>
                        Clear all completed tasks
                    </Button>
                </div>
            )}
        </div>

    </div>
  )
}

export default KanbanColumn