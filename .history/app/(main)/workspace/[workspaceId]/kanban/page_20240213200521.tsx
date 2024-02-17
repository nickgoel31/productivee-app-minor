"use client"

import { Button } from '@/components/ui/button'
import { Column, Id, Task } from '@/types/kanban'
import React, { useMemo, useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'
import KanbanCard from '../_components/kanban/kanban-card'


const KanbanPage = () => {

  const [columns,setColumns] = useState<Column[]>(columnsInitial);
  const [tasks,setTasks] = useState<Task[]>([]);

  const columnsId = useMemo(() => columns.map((col) => col.id),[columns])

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 3 // 3px
    }
  }))

  return (
    <div className='py-6 flex flex-col gap-6 pr-9'>
      <div className='flex items-center w-full justify-between'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-semibold'>Kanban Board</h2>
          <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
        </div>

        <Button variant={"outline"} onClick={createTask}>Add new task +</Button>
      </div>

      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <div className='md:grid-cols-4 grid grid-cols-1 gap-8 h-full min-h-[700px] w-full'>
          <SortableContext items={columnsId}>
            {columns.map((col) => (
              <KanbanColumn 
                key={col.id} 
                column={col}
                tasks={tasks.filter(t => t.columnId === col.id)}
              />
            ))}

          </SortableContext>
        </div>

        {createPortal(
          <DragOverlay>
          {activeColumn && <KanbanColumn column={activeColumn} tasks={tasks.filter(t => t.columnId === activeColumn.id)}/>}

          {activeTask && <KanbanCard task={activeTask} />}
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

    if(e.active.data.current?.type === "Task"){
      setActiveTask(e.active.data.current.task)
    }
  }

  function onDragOver(e: DragOverEvent){
    const {active,over} = e;

    if(!over) return;

    const activeId = active.id;
    const overId = over.id

    if(activeId === overId) return;
  }

  function onDragEnd(e: DragEndEvent){
    const {active,over} = e;

    if(!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id

    if(activeColumnId === overColumnId) return;

    setColumns(columns => {
      const activeColumnIndex = columns.findIndex(col => col.id === activeColumnId);
      const overColumnIndex = columns.findIndex(col => col.id === overColumnId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    })
  }

  function createTask(){
    const newTask: Task = {
      id: Math.floor(Math.random() * 10001),
      columnId:2,
      content: `Task ${tasks.length + 1}`
    }

    setTasks([...tasks, newTask])
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