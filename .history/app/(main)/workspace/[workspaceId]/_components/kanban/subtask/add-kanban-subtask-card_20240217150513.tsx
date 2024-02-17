import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const AddKanbanSubtaskCard = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='cursor-pointer py-1 hover:bg-neutral-500/10 transition w-full text-sm font-medium text-neutral-300 items-center flex justify-center'>
            Add a subtask +
            </div>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a subtask</DialogTitle>
                <DialogDescription>
                    By clicking add button below, you'll add a subtask to your task!
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default AddKanbanSubtaskCard