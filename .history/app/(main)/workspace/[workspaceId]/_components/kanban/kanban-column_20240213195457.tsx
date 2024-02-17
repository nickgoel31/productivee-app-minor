"use client"

import { Column, Task } from '@/types/kanban'
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useMemo } from 'react'
import KanbanCard from './kanban-card';

interface Props{
    column: Column;
    tasks: Task[];
}

const KanbanColumn = (props: Props) => {
    const {column,tasks} = props;

    const tasksIds = useMemo(() => {
        return tasks.map(task => task.id)
    }, [tasks])

    const {setNodeRef,attributes,listeners,transform,transition, isDragging} = useSortable({
        id: column.id,
        data:{
            type:"Column",
            column
        }
    })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    if(isDragging) {
        return <div ref={setNodeRef} style={style} className='p-3 h-full rounded-lg bg-green-400/5 space-y-5'>

        </div>
    }

  return (
    <div ref={setNodeRef}
        style={style}
    className=' p-3 h-full rounded-lg hover:bg-neutral-900/40 transition space-y-5'>
        <div {...attributes} {...listeners} className='w-full flex items-center justify-between p-2'>
            <h3 className={`font-semibold ${column.headingColor}`}>{column.title}</h3>
            <p className='text-muted-foreground'>4</p>
        </div>

        <div className='flex flex-col gap-2 '>
            <SortableContext items={tasksIds}>

            
                {tasks.map((task) => (
                    <KanbanCard task={task}/>
                ))}
            </SortableContext>
        </div>
    </div>
  )
}

export default KanbanColumn