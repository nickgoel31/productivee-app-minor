import React from 'react'
import {motion} from "framer-motion"
import { TaskType } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


const KanbanCard = ({id, title,status, handleDragStart} : TaskType) => {


  // if(isDragging){
  //   return <div ref={setNodeRef} style={style} className='border p-3  w-full bg-neutral-900 rounded-lg opacity-50'>
  //     {title}
  //   </div>
  // }

  return (
    <>
      {/* <DropIndicator beforeId={id} column={status} /> */}
        <div
        // onDragStart={(e) => handleDragStart(e, { title, id, status })}
        className='border p-3  w-full bg-neutral-900 rounded-lg'>
            <h3 className='text-neutral-100'>{title}</h3>
        </div>
        
    </>
  )
}

export default KanbanCard

