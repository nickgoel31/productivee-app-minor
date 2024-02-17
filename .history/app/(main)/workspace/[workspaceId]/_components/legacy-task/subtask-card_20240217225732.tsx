"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addSubTaskInDB } from '@/actions/subtasks/add-subtask';
import { SubTask } from '@/types/legacy-task';
import { Check, CheckCheck, Trash2, Undo2 } from 'lucide-react';
import { updateAllSubTaskInDB, updateSubTaskInDB } from '@/actions/subtasks/update-subtask';
import { cn } from '@/lib/utils';
import { deleteSubTaskInDB } from '@/actions/subtasks/delete-subtask';

const SubTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})

interface Props{
    subTask: SubTask;
    taskIsDone: boolean;
}

const SubtaskCard = ({subTask, taskIsDone}:Props) => {

    const [isDone, setIsDone] = useState<boolean>(subTask.isDone)

    if(taskIsDone) {
        updateAllSubTaskInDB(true);
    }

    const handleIsDoneSubtaskClick = () => {
        setIsDone(!isDone)
        
    }

    useEffect(() => {
        updateSubTaskInDB(subTask.id, isDone);
    },[isDone,subTask.id])

    const handleDeleteSubtaskClick = () => {
        deleteSubTaskInDB(subTask.id)
    }


  return (
    <div className='flex items-center justify-between w-full hover:bg-neutral-400/10 p-1'>
        <h4 className={cn(`text-sm font-medium text-neutral-400`, subTask.isDone && "line-through")}>{subTask.title}</h4>

        <div className='flex items-center justify-center gap-2'>
            <div onClick={handleIsDoneSubtaskClick} className='p-1 hover:bg-neutral-400/10 cursor-pointer'>
                {subTask.isDone ? (
                    <Undo2 size={16} />
                ) : (
                    <Check size={16} />
                )}
            </div>

            <div onClick={handleDeleteSubtaskClick} className='p-1 hover:bg-neutral-400/10 cursor-pointer text-red-400'>
                <Trash2 size={16} />
            </div>
        </div>
    </div>
  )
}




export const AddNewSubtaskCard = ({taskId}:{taskId:string}) => {

    const form = useForm<z.infer<typeof SubTaskSchema>>({
        resolver: zodResolver(SubTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const {isValid} = form.formState;

    const onSubmit = (values: z.infer<typeof SubTaskSchema>) => {
        addSubTaskInDB(values, taskId)
    }

    return (
        <Dialog>
        <DialogTrigger className="">
            <div className='group flex items-center justify-center w-full cursor-pointer mt-1'>
                <h4 className='text-sm font-medium text-neutral-300 text-center group-hover:text-neutral-100 transition'>Add a subtask +</h4>
            </div>
        </DialogTrigger>

        <DialogContent className='lg:w-full w-[95%]'>
          <DialogHeader>
            <DialogTitle>Add a Subtask</DialogTitle>
            <DialogDescription>This will create a subtask inside of this task</DialogDescription>
          </DialogHeader>  

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
                
                <FormField
                control={form.control}
                name='title'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="eg- Buy milk"
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
                />

                <Button className="w-fit mt-3" type="submit">
                    <DialogClose disabled={!isValid}>Add subtask</DialogClose>
                </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      )
}

export default SubtaskCard