"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const newTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    })
})

const AddNewTaskKanban = () => {

    const form = useForm()


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



        </DialogContent>
    </Dialog>
  )
}

export default AddNewTaskKanban