"use client"

import { Button } from '@/components/ui/button'
import { Column, Id } from '@/types/kanban'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'

const KanbanPage = () => {

  const [columns, setColumns] = useState<Column[]>([
    {
      id: 1,
      title: "ON HOLD"
    }
  ])

  return (
    <div className='py-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <div>
        <Button onClick={createNewColumn}>Add new column</Button>
      </div>

      <div className='flex gap-8'>
        {columns.map((col) => (
          <KanbanColumn column={col}/>
        ))}
      </div>


    </div>
  )

  function createNewColumn(){
    const columnToAdd: Column = {
      id: Math.floor(Math.random() * 10001),
      title: `Column ${columns.length + 1}`
    }
    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id:Id){
    const filteredColumns = columns.filter(col => col.id !== id);
    setColumns(filteredColumns)
  }
}

export default KanbanPage