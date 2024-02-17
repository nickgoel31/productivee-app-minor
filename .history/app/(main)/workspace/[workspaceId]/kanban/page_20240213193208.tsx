"use client"

import { Button } from '@/components/ui/button'
import { Column, Id } from '@/types/kanban'
import React, { useMemo, useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'


const KanbanPage = () => {

  const columns: Column[] = columnsInitial;

  const columnsId = useMemo(() => columns.map((col) => col.id),[columns])

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)

  return (
    <div className='py-6 flex flex-col gap-6 pr-9'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className='md:grid-cols-4 grid grid-cols-1 gap-8 h-full min-h-[700px] w-full'>
          <SortableContext items={columnsId}>
            {columns.map((col) => (
              <KanbanColumn key={col.id} column={col}/>
            ))}

          </SortableContext>
        </div>

        {createPortal(
          <DragOverlay>
          {activeColumn && <KanbanColumn column={activeColumn} />}
        </DragOverlay>, document.body
        )}
      </DndContext>


    </div>
  )

  function onDragStart(e: DragStartEvent){
    if(e.active.data.current?.type === "Column"){
      setActiveColumn(e.active.data.current.column);
      return;
    }
  }

  function onDragEnd(e: DragEndEvent){
    const {active,over} = e;

    if(!over) return;

    const activeColumnId = active.id;
    cobst overColumnId = over.id
  }
}

export default KanbanPage


const columnsInitial = [
  {
    id: 1,
    title: "ON HOLD",
    headingColor: "text-neutral-500"
  },
  {
    id: 2,
    title: "TODO",
    headingColor: "text-yellow-300/80"
  },
  {
    id: 3,
    title: "IN PROGRESS",
    headingColor: "text-blue-400/80"
  },
  {
    id: 4,
    title: "COMPLETED",
    headingColor: "text-green-400/80"
  },
]