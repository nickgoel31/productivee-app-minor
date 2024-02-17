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
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LegacyTaskSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
})

const NewLegacyTask = ({workspaceId}:{workspaceId:string}) => {

    const form = useForm({
        resolver: zodResolver(LegacyTaskSchema)
    })


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

          <Form>
            <form onSubmit={() => {}} className="flex flex-col gap-1">
                <p className="text-sm font-medium ml-1">Title</p>
                <Input
                type="text"
                name="title" // Name the input for easier access
                placeholder="eg- Buy milk"
                value={""} // Controlled input
                onChange={() => {}}
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