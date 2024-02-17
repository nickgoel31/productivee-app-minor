import React from 'react'
import {motion} from "framer-motion"
import { TaskType } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


const KanbanCard = ({id, title,status, handleDragStart} : TaskType) => {

  return (
    <>
        <div
        className='border p-3  w-full bg-neutral-900 rounded-lg'>
            <h3 className='text-neutral-100'>{title}</h3>
        </div>
        
    </>
  )
}

export default KanbanCard

