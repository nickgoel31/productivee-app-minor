
import { markTodoDone } from '@/actions/mark-todo-done'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Delete } from 'lucide-react'
import React from 'react'

const TodoCard = ({id, title, isDone}:{id:string,title:string, isDone:boolean}) => {


    const onClick = () => {
        markTodoDone(id);
    }

  return (
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-96'>
        <div className='flex items-center gap-3'>
            <Checkbox />
            <h2 className={cn('font-medium text-lg line-clamp-1', isDone ? "line-through text-neutral-500" : "")}>Buy milk</h2>
        </div>
        <div>
            <div onClick={onClick}>
                <Switch className='h-4 w-7'/>
            </div>
        </div>
    </div>
  )
}

export default TodoCard