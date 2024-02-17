"use client"

import { Button } from '@/components/ui/button'
import { Column, Id } from '@/types/kanban'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'

const KanbanPage = () => {

  const columns: Column[] = [
    {
      id: 1,
      title: "ON HOLD"
    },
    {
      id: 2,
      title: "TODO"
    },
    {
      id: 3,
      title: "IN PROGRESS"
    },
    {
      id: 4,
      title: "COMPLETED"
    },
  ]

  return (
    <div className='py-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <div className='md:grid-cols-4 grid grid-cols-1 gap-8 h-ful'>
        {columns.map((col) => (
          <KanbanColumn column={col}/>
        ))}
      </div>


    </div>
  )
}

export default KanbanPage