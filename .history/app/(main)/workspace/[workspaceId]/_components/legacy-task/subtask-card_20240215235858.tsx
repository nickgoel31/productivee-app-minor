"use client"

import React from 'react'
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

const SubTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})

interface Props{
    subTask: SubTask
}

const SubtaskCard = ({subTask}:Props) => {
  return (
    <div className='flex items-center justify-between w-full'>
        <h4 className='text-sm font-medium text-neutral-300'>{}</h4>
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
                <h4 className='text-sm font-medium text-neutral-300 text-center group-hover:text-neutral-100 transition'>Add a task +</h4>
            </div>
        </DialogTrigger>

        <DialogContent className=''>
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