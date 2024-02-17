import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'

const NewTodoAdd = () => {
  return (
    <div className='flex items-center justify-between border border-dashed rounded-md px-4 py-4 w-96 cursor-pointer group'>
        <div className='flex items-center gap-1 justify-center w-full text-neutral-500 group-hover:text-neutral-50 transition'>
            <h2 className={cn('font-medium text-lg line-clamp-1 ')}>Add a todo</h2>
            <Plus />
        </div>
    </div>
  )
}

export default NewTodoAdd