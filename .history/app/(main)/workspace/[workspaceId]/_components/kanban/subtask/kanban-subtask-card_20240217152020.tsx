import { KanbanSubtask } from '@/types/kanban'
import React from 'react'

interface Props{
  subtask: KanbanSubtask;
}

const KanbanSubtaskCard = ({subtask}:Props) => {
  return (
    <div className='max-w-screen-lg border py-2 px-4 rounded'>
        KanbanSubtaskCard
    </div>
  )
}

export default KanbanSubtaskCard