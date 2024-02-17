"use client"

import { markTodoDone, markTodoNotDone } from '@/actions/mark-todo-done'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Check, Delete, Edit, Trash, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import DeleteTodoButton from './delete-todo-btn'
import { Input } from '@/components/ui/input'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"


  const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title should not be blank"
    })
  })


const TodoCard = ({workspaceId, id, title, isDone}:{workspaceId:string, id:string,title:string, isDone:boolean}) => {

    const { toast } = useToast()
    const [isMounted, setIsMounted] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title,
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

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
                    <Input className='w-fit h-8'/>
                )}
                <div className="cursor-pointer text-neutral-400 hover:text-neutral-200 transition" onClick={() => setIsEditingTitle(!isEditingTitle)}>
                    {isEditingTitle ? (
                        <>
                            <Edit className='' size={17}/>
                        </>
                    ) : (
                        <>
                            <Check size={17}/>
                        </>
                    )}
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