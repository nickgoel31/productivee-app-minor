import React from 'react'
import {motion} from "framer-motion"
import { TaskType } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '@/types/kanban'

interface Props{
  task: Task;
}


const KanbanCard = ({task} : Props) => {

  const {setNodeRef,attributes,listeners,transform,transition, isDragging} = useSortable({
    id: task.id,
    data:{
        type:"Task",
        task
    }
})

  const style = {
      transition,
      transform: CSS.Transform.toString(transform)
  }

  if(isDragging) {
    return <div ref={setNodeRef} style={style} className='opacity-20 border-green-500 border p-3 w-full bg-neutral-900 rounded-lg'>{task.content}</div>
  }




  return (
    <div ref={setNodeRef} style={style}
        {...attributes} {...listeners}
      className='border p-3  w-full bg-neutral-900 rounded-lg cursor-grab transition'
    >
      <h3 className='text-neutral-100'>{task.content}</h3>
    </div>
        
  )
}

export default KanbanCard

