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
import { AlertDialogCancel } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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

    const onSubmit = (values: z.infer<typeof LegacyTaskSchema>) => {
        console.log(values)
    }


  return (
      <Dialog>
        <DialogTrigger className="">
          <div>
            <Button className='' variant={"outline"}>
                Add task +
            </Button>
          </div>
        </DialogTrigger>

        <DialogContent className=''>
          <DialogHeader>
            <DialogTitle>Add a Task</DialogTitle>
            <DialogDescription>This will create a new task in this workspace</DialogDescription>
          </DialogHeader>  

          <Form {...form}>
            <form onSubmit={() => {}} className="flex flex-col gap-1">
                
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
                <DialogClose>Add to the list</DialogClose>
                </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
  )
}

export default NewLegacyTask