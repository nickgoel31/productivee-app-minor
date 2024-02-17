import { Task } from '@/types/kanban'
import React from 'react'

interface Props{
    tasks: Task[]
}

const KanbanTaskCard = ({tasks}:Props) => {
  return (
    <div className='border bg-neutral-900 rounded p-3'>
        <h4 className='text-sm text-neutral-200'>make a navbar</h4>
    </div>
  )
}

export default KanbanTaskCard