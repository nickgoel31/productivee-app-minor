import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const TodoCard = () => {
  return (
    <div className='border rounded-md px-6 py-4 w-96'>
        <div className='flex items-center gap-2'>
            <Checkbox />
            <h2 className='font-medium text-lg line-clamp-1'>Buy milk</h2>
        </div>
    </div>
  )
}

export default TodoCard