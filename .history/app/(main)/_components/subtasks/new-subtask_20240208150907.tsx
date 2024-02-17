import { Plus } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const NewSubtask = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='w-full py-1 flex gap-1 items-center justify-center text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer'>
                Add a new subtask
                <Plus size={14}/>
            </div>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Add a new subtask
                </DialogTitle>
                <DialogDescription>
                    New subtask will be created.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default NewSubtask