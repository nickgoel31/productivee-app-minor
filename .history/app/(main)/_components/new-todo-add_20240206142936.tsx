import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const NewTodoAdd = () => {
  return (
    <div className='flex items-center justify-between border border-dashed rounded-md px-4 py-4 w-96 cursor-pointer group'>
        <Dialog>
            <DialogTrigger className='w-full bg-red-100'>
                <div className='flex items-center gap-1 justify-center w-full text-neutral-500 group-hover:text-neutral-50 transition text-center'>
                    <h2 className={cn('font-medium text-lg line-clamp-1 ')}>Add a todo</h2>
                    <Plus />
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    </div>
  )
}

export default NewTodoAdd