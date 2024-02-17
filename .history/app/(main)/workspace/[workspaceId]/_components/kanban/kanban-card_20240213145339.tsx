import React, { DragEvent } from 'react'
import DropIndicator from './kanban-drop-indicator'
import {motion} from "framer-motion"

type CardType = {
  title:string,
  id:string,
  column: string
}

const KanbanCard = ({id, title, column, handleDragStart} : {id:string, title:string, column:string, handleDragStart:(e: DragEvent<HTMLDivElement>, card: CardType) => void}) => {
  return (
    <>
        <DropIndicator beforeId={id} column={column}/>
        <motion.div layout layoutId={id} draggable className='border p-3  w-full bg-neutral-900 rounded-lg cursor-grab active:cursor-grabbing'>
            <h3 className='text-neutral-100'>{title}</h3>
        </motion.div>
        
    </>
  )
}

export default KanbanCard

