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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
  

const NewTodoAdd = () => {
  return (
    <div className='flex items-center justify-between border border-dashed rounded-md w-96 overflow-hidden cursor-pointer group'>
        <Dialog>
            <DialogTrigger className='w-full  px-4 py-4 '>
                <div className='flex items-center gap-1 justify-center w-full text-neutral-500 group-hover:text-neutral-50 transition text-center'>
                    <h2 className={cn('font-medium text-lg line-clamp-1 ')}>Add a todo</h2>
                    <Plus />
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a Todo</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-medium ml-1'>Title</p>
                    <Input type='text' placeholder='eg- Buy milk'/>
                </div>
                    <Button className='w-16'>Add to the list</Button>
            </DialogContent>

        </Dialog>
    </div>
  )
}

export default NewTodoAdd