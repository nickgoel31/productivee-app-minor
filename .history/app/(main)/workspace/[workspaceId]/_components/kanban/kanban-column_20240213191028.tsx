import { Column } from '@/types/kanban'
import React from 'react'

interface Props{
    column: Column
}

const KanbanColumn = (props: Props) => {
    const {column} = props;
  return (
    <div className=' p-4 rounded-lg '>
        <h1>{column.title}</h1>
    </div>
  )
}

export default KanbanColumn