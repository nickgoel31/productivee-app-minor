import { Checkbox } from '@/components/ui/checkbox';
import { KanbanSubtask } from '@/types/kanban'
import { CheckboxItem } from '@radix-ui/react-dropdown-menu';
import React from 'react'

interface Props{
  subtask: KanbanSubtask;
}

const KanbanSubtaskCard = ({subtask}:Props) => {
  return (
    <div className='max-w-screen-lg border py-2.5 px-4 rounded flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Checkbox className='opacity-80 border-neutral-500'/>
          <h5 className='font-medium text-neutral-300'>{subtask.title}</h5>
        </div>
    </div>
  )
}

export default KanbanSubtaskCard