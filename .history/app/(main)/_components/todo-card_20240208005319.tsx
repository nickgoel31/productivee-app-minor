"use client"

import { markTodoDone, markTodoNotDone } from '@/actions/mark-todo-done'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Delete, Edit, Trash, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import DeleteTodoButton from './delete-todo-btn'
import { Input } from '@/components/ui/input'


const TodoCard = ({workspaceId, id, title, isDone}:{workspaceId:string, id:string,title:string, isDone:boolean}) => {

    const { toast } = useToast()

    const [isMounted, setIsMounted] = useState(false);

    const [isEditingTitle, setIsEditingTitle] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


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
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-[600px] relative'>
        <div className='flex items-center gap-3'>
            <Checkbox />
            <div className='flex items-center gap-3'>
                {isEditingTitle ? (
                    <h2  className={cn('font-medium text-lg line-clamp-1', isDone ? "line-through text-neutral-500" : "")}>
                        {title}
                    </h2>
                ) : (
                    <Input />
                )}
                <div className="cursor-pointer" onClick={() => setIsEditingTitle(!isEditingTitle)}>
                    <Edit className='text-neutral-400' size={17}/>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-3'>

            <DeleteTodoButton id={id} title={title}/>
            
            <div onClick={onClick} className='text-xs font-medium text-neutral-300 cursor-pointer'>
                {!isDone && (
                    <p>Mark as Completed</p>
                )}
                {isDone && (
                    <p className=''>Undo</p>
                )}
            </div>
            <div className='absolute'>
                <Toaster />
            </div>
        </div>
    </div>
  )
}

export default TodoCard