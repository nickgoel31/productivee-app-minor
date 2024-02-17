"use client"

import { Button } from '@/components/ui/button'
import { Column } from '@/types/kanban'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'

const KanbanPage = () => {

  const [columns, setColumns] = useState<Column[]>([])
  console.log(columns)

  return (
    <div className='py-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <div>
        <Button onClick={createNewColumn}>Add new column</Button>
      </div>

      <div>
        {columns.map((col) => (
          <KanbanColumn />
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
}

export default KanbanPage