import React, { DragEvent } from 'react'
import DropIndicator from './kanban-drop-indicator'
import {motion} from "framer-motion"
import { TaskType } from '@/types'

import { useSortable } from '@dnd-kit/sortable'}


const KanbanCard = ({id, title,status, handleDragStart} : TaskType) => {

  const {attributes,listeners,setNodeRef, transform,transition} = useSortable({id})

  return (
    <>
      {/* <DropIndicator beforeId={id} column={status} /> */}
        <motion.div ref={setNodeRef} layout layoutId={id}  draggable
        // onDragStart={(e) => handleDragStart(e, { title, id, status })}
        className='border p-3  w-full bg-neutral-900 rounded-lg cursor-grab active:cursor-grabbing'>
            <h3 className='text-neutral-100'>{title}</h3>
        </motion.div>
        
    </>
  )
}

export default KanbanCard

