"use client"

import { markTodoDone, markTodoNotDone } from '@/actions/mark-todo-done'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Delete } from 'lucide-react'
import React from 'react'
import { useToast } from "@/components/ui/use-toast"


const TodoCard = ({id, title, isDone}:{id:string,title:string, isDone:boolean}) => {

    const { toast } = useToast()


    const onClick = () => {
        if(!isDone){
            markTodoDone(id);

            toast({
                title: `Item "${title}" marked completed!`,
              })
        }
        else{
            markTodoNotDone(id);
            toast({
                title: `Item "${title}" unmarked!`,
              })
        }
    }

  return (
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-96 relative'>
        <div className='flex items-center gap-3'>
            <Checkbox />
            <h2 className={cn('font-medium text-lg line-clamp-1', isDone ? "line-through text-neutral-500" : "")}>
                {title}
            </h2>
        </div>
        <div className='flex items-center gap-3'>
            
            <div onClick={onClick} className='text-xs'>
                Mark as Completed
            </div>
            <div className='absolute'>
                <Toaster />
            </div>
        </div>
    </div>
  )
}

export default TodoCard