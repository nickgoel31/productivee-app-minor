"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { KanbanSubtask } from '@/types/kanban';
import React from 'react'

interface Props{
    subtask: KanbanSubtask;
  }

const EditKanbanSubtask = ({subtask}:Props) => {
  return (
    <Dialog>
        <DialogTrigger>
            <button className='border text-xs font-medium p-1.5 px-3 hover:bg-neutral-500/20 transition'>Edit</button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit "{subtask.title}"</DialogTitle>
                <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </DialogDescription>
            </DialogHeader>

            <form></form>
        </DialogContent>
    </Dialog>
  )
}

export default EditKanbanSubtask