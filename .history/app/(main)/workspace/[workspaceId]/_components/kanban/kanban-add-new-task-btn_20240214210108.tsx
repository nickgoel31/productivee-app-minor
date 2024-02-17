"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

const newTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

const AddNewTaskKanban = () => {

    const form = useForm<z.infer<typeof newTaskSchema>>({
        resolver: zodResolver(newTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const handleNewTaskSubmit = (values: z.infer<typeof newTaskSchema>) => {
        console.log(values)
    }


  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"}>Add a new task +</Button>
        </DialogTrigger>

        <DialogContent>
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
                    render={((field) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' placeholder='eg- make a new navbar' {...field}/>
                            <FormMessage />
                        </FormItem>
                    ))}
                    />
                </form>
            </Form>

        </DialogContent>
    </Dialog>
  )
}

export default AddNewTaskKanban