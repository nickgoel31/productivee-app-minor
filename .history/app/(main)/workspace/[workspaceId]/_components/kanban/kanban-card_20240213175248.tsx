import React from 'react'
import {motion} from "framer-motion"
import { TaskType } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


const KanbanCard = ({id, title,status, handleDragStart} : TaskType) => {

  const {attributes,listeners,setNodeRef, transform,transition} = useSortable({id, data:{
    type: "Task",
  }})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <>
      {/* <DropIndicator beforeId={id} column={status} /> */}
        <motion.div layout layoutId={id}
        // onDragStart={(e) => handleDragStart(e, { title, id, status })}
        className='border p-3  w-full bg-neutral-900 rounded-lg'>
            <h3 className='text-neutral-100'>{title}</h3>
        </motion.div>
        
    </>
  )
}

export default KanbanCard

