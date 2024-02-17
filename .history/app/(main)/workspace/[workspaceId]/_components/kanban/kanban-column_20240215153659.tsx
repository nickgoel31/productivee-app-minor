import { Column, Task } from '@/types/kanban'
import React from 'react'
import KanbanTaskCard from './kanban-task-card'

interface Props{
    col: Column
    tasks: Task[];
}

const KanbanColumn = ({col, tasks}:Props) => {

    const filteredTasks = tasks.filter(t => t.columnId === col.id);

  return (
    <div className='w-full h-full flex flex-col gap-5 items-start justify-start py-2 px-3'>
        <div className='flex items-center justify-between w-full'>
            <h3 className={`font-medium ${col.colorScheme} `}>{col.title}</h3>
            <p className='text-muted-foreground text-sm'>{filteredTasks.length}</p>
        </div>

        <div className='flex flex-col gap-2 w-full'>
            {filteredTasks.map((t) => (
                <KanbanTaskCard task={t}/>
            ))}
        </div>
    </div>
  )
}

export default KanbanColumn