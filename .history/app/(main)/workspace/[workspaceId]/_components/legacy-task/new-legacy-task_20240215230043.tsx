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

const NewLegacyTask = ({workspaceId}:{workspaceId:string}) => {
  return (
    <div className="flex items-center justify-between border border-dashed rounded-md w-[600px] overflow-hidden cursor-pointer group">
      <Dialog>
        <DialogTrigger  className="w-full px-4 py-4">
          <div>
            <Button>
                Add task +
            </Button>
          </div>
        </DialogTrigger>

        <DialogContent className=''>
          <DialogHeader>
            <DialogTitle>Add a Task</DialogTitle>
            <DialogDescription>This will create a new task in this workspace</DialogDescription>
          </DialogHeader>  

          <DialogClose className='absolute top-2 right-3 border-none p-0 m-0'><XIcon /></DialogClose>

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
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NewLegacyTask