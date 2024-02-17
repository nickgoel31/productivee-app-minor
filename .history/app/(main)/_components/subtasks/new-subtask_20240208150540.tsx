import { Plus } from 'lucide-react'
import React from 'react'

const NewSubtask = () => {
  return (
    <div className='w-full py-1 flex gap-1 items-center justify-center text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-all'>
        Add a new subtask
        <Plus size={14}/>
    </div>
  )
}

export default NewSubtask