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

  return (
    <div
      className='border p-3  w-full bg-neutral-900 rounded-lg cursor-grab'
    >
      <h3 className='text-neutral-100'>{task.content}</h3>
    </div>
        
  )
}

export default KanbanCard

