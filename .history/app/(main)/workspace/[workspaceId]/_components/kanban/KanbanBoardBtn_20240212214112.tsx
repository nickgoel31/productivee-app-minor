import { Kanban } from 'lucide-react'
import React from 'react'

const KanbanBoardBtn = () => {
  return (
    <div className='p-4 h-40 w-48 flex flex-col gap-3 items-center justify-center rounded-lg border bg-neutral-900'>
      <Kanban />
      <h2>Kanban Board</h2>
    </div>
  )
}

export default KanbanBoardBtn