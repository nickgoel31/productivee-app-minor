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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const NewSubtask = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='w-full py-1 flex gap-1 items-center justify-center text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer'>
                Add a new subtask
                <Plus size={14}/>
            </div>
        </DialogTrigger>

        <DialogContent className='w-full  flex flex-col'>
            <DialogHeader>
                <DialogTitle>
                    Add a new subtask
                </DialogTitle>
                <DialogDescription>
                    New subtask will be created.
                </DialogDescription>
            </DialogHeader>

            <Input type='text' placeholder='eg- Make a navbar'/>

            <div>
                <DialogClose className=''>
                    <Button>
                        Add
                    </Button>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default NewSubtask