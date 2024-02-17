import { Column } from '@/types/kanban'
import React from 'react'

interface Props{
    column: Column
}

const KanbanColumn = (props: Props) => {
    const {column} = props;
  return (
    <div className=' p-4 h-full rounded-lg bg-neutral-900/40'>
        <h3 className={`font-semibold ${column.headingColor}`}>{column.title}</h3>
    </div>
  )
}

export default KanbanColumn