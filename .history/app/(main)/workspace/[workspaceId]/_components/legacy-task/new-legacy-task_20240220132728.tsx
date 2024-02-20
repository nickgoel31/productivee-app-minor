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
import { Plus, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addLegacyTaskInDB } from '@/actions/legacy-tasks/add-task';

const LegacyTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})

const NewLegacyTask = ({workspaceId}:{workspaceId:string}) => {

    const form = useForm<z.infer<typeof LegacyTaskSchema>>({
        resolver: zodResolver(LegacyTaskSchema),
        defaultValues: {
            title: ""
        }
    })

    const {isValid} = form.formState;

    const onSubmit = (values: z.infer<typeof LegacyTaskSchema>) => {
        addLegacyTaskInDB(values, workspaceId)
    }


  return (
      <Dialog>
        <DialogTrigger className="">
          <div>
            <Button className='select-none' variant={"outline"}>
                Add task +
            </Button>
          </div>
        </DialogTrigger>

        <DialogContent className='lg:w-full w-[95%]'>
          <DialogHeader>
            <DialogTitle>Add a Task</DialogTitle>
            <DialogDescription>This will create a new task in this workspace</DialogDescription>
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
                <DialogClose disabled={!isValid} className='w-full flex justify-end'>
                  <Button className="w-fit mt-3" type="submit">
                      Add to the list
                  </Button>
                </DialogClose>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
  )
}

export default NewLegacyTask