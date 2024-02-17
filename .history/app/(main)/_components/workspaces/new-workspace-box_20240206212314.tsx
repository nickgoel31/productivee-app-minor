import { ChevronRightCircle, PlusCircle } from 'lucide-react'
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
  

const NewWorkspaceBox = () => {
  return (
    <Dialog>
        <DialogTrigger className='border hover:border-green-600/50 rounded-md overflow-hidden cursor-pointer group relative flex items-center justify-center flex-col gap-2 hover:text-green-500 transition'>
            <PlusCircle size={20}/>
            <h2 className='font-medium text-sm'>New workspace</h2>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create new workspace</DialogTitle>
            <DialogDescription>
                By clicking on create, a new workspace will be created.
            </DialogDescription>
            </DialogHeader>

            <div className="space-y-1">
                <label htmlFor="name" className='font-medium text-sm ml-1'>Name*</label>
                <Input name='name' placeholder="eg- TWJ"/>
            </div>

            <div className="space-y-1">
                <label htmlFor="desc" className='font-medium text-sm ml-1'>Description <span className='text-neutral-400'>{"(optional)"}</span></label>
                <Input name='desc' placeholder="eg- TWJ"/>
            </div>

            <div className='w-full flex gap-5 items-center justify-end'>
                <DialogClose>
                    <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
            </div>

        </DialogContent>
    </Dialog>
  )
}

export default NewWorkspaceBox