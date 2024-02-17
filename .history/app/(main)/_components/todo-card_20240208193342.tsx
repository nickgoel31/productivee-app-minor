"use client"

import { markTodoDone, markTodoNotDone } from '@/actions/mark-todo-done'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Check, ChevronDown, ChevronRight, Delete, Dot, Edit, ListChecks, ListTodo, Trash, Trash2, Trash2Icon } from 'lucide-react'
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
import { Button } from '@/components/ui/button'
import { updateTodoInDB } from '@/actions/update-todo'
import { addSubTaskInDB } from '@/actions/subtasks/add-subtask'
import NewSubtask from './subtasks/new-subtask'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { deleteSubTaskInDB } from '@/actions/subtasks/delete-subtask'


  const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title should not be blank"
    })
  })

type TodoCard = {
    workspaceId:string;
    id:string;
    title:string; 
    isDone:boolean;
}

type SubTask = {
    id: string;
    todoId: string;
    title: string;
}

interface SubtasksProps {
    data: SubTask[]
}

interface TodoCardProps extends SubtasksProps {
    workspaceId:string;
    id:string;
    title:string; 
    isDone:boolean;
}



const TodoCard = ({workspaceId, id, title, isDone, data}:TodoCardProps) => {

    const { toast } = useToast()
    const [isMounted, setIsMounted] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const [todoOpen, setTodoOpen] = useState(false)

    const todoId = id;


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title,
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        updateTodoInDB(values, id,workspaceId)
        setIsEditingTitle(false)
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



    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    

  return (
    <div className='flex flex-col  gap-3 border rounded-md px-4 py-4 w-[600px] relative transition'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div onClick={() => setTodoOpen(!todoOpen)} className='cursor-pointer select-none'>
                    {todoOpen ? (
                        <>
                            <ChevronDown size={22}/>
                        </>
                    ): (
                        <>
                            <ChevronRight size={22}/>
                        </>
                    )}
                </div>
                <div className='flex items-center gap-3'>
                    {!isEditingTitle ? (
                        <h2  className={cn('font-medium text-lg line-clamp-1', isDone ? "line-through text-neutral-500" : "")}>
                            {title}
                        </h2>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
                                <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input placeholder="eg- buy milk" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Button type="submit" variant={"ghost"} className='p-2 hover:bg-background hover:opacity-100'><Check size={17}/></Button>
                            </form>
                        </Form>
                    )}
                    <div className="cursor-pointer text-neutral-400 hover:text-neutral-200 transition" onClick={() => setIsEditingTitle(!isEditingTitle)}>
                        {!isEditingTitle && !isDone ? (
                            <>
                                <Edit className='' size={17}/>
                            </>
                        ) : (
                            <>
                                
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

        {todoOpen && (
            <div className='flex flex-col gap-2 px-7 transition'>
                
                {data.length !== 0 && data.length > 0 &&  (<h3 className={cn('text-sm font-medium')}>Subtasks</h3>)}

                <div className='flex flex-col text-neutral-200'>
                    {data.length === 0 && (<p className='text-xs font-medium my-1 text-neutral-500'>No subtasks found</p>)}
                    {data.map((subtask) => (
                        <div  key={subtask.id} className='w-full  flex cursor-pointer items-center justify-between gap-3 hover:bg-neutral-400/10 transition'>
                            
                            <li className='flex items-center  w-full  px-2'>
                                
                                <p className='text-sm'>{subtask.title}</p>
                            </li>

                            <div className='flex items-center gap-1 pr-2 '>
                                <Button variant={"ghost"} className='px-2'>
                                    <Check size={15}/>
                                </Button>

                                <Button onClick={() => deleteSubTaskInDB(subtask.id)} variant={"ghost"} className='px-2 py-0'>
                                    <Trash2Icon className='text-red-500' size={15}/>
                                </Button>
                                
                                {/* <AlertDialog>
                                    <AlertDialogTrigger>
                                        
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        </AlertDialogHeader>
                                    </AlertDialogContent>
                                </AlertDialog> */}
                            </div>
                            
                        </div>
                    ))}
                    <NewSubtask todoId={todoId}/>
                </div>
            </div>
        )}


    </div>
  )
}

export default TodoCard