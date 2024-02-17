"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { addSubTaskInDB } from '@/actions/subtasks/add-subtask';
import { addTaskInDB } from '@/actions/tasks/add-task';

const newTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

const AddNewTaskKanban = ({workspaceId} : {workspaceId:string}) => {

    const form = useForm<z.infer<typeof newTaskSchema>>({
        resolver: zodResolver(newTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const {isValid} = form.formState;

    const handleNewTaskSubmit = (values: z.infer<typeof newTaskSchema>) => {
        addTaskInDB(values, workspaceId)
    }


  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className='flex items-center gap-1'><p className='hidden lg:block'>Add a new task </p> +</Button>
        </DialogTrigger>

        <DialogContent className='w-[95%] lg:w-fit'>
            <DialogHeader>
                <DialogTitle>Add a new task</DialogTitle>
                <DialogDescription>
                  Enter the title of your new task below.
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleNewTaskSubmit)}>
                    <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='eg- make a new navbar' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className='w-full flex items-center justify-end mt-4'>
                        <DialogClose disabled={!isValid}>
                            <Button type='submit'>Add task</Button>
                        </DialogClose>
                    </div>
                </form>
            </Form>

        </DialogContent>
    </Dialog>
  )
}

export default AddNewTaskKanban