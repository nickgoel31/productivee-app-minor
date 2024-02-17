import { KanbanSubtask } from '@/types/kanban'
import React from 'react'

interface Props{
  subtask: KanbanSubtask;
}

const KanbanSubtaskCard = ({subtask}:Props) => {
  return (
    <div className='max-w-screen-lg border py-2 px-4 rounded flex items-center justify-between'>
        
    </div>
  )
}

export default KanbanSubtaskCard