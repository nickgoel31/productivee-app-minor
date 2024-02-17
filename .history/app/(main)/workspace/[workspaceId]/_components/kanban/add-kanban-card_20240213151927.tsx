"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SetCardsProps } from '@/interfaces'
import React, { FormEvent, useState } from 'react'



const AddCard = ({workspaceId} : {workspaceId:string}) => {

    const [text,setText] = useState("");
    // const [adding,setAdding] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!text.trim().length) return;

        
    }


  return (
    <Dialog>
        <DialogTrigger>
            <Button className='' variant={"outline"}>Add a new task +</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Add a new task
                </DialogTitle>
                <DialogDescription>by clicking add you will be able to create a new task.</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit}>
                <div className='space-y-1'>
                    <Label>Title</Label>
                    <Input autoFocus onChange={(e) => setText(e.target.value)} type='text' placeholder='eg- Make a new navbar'/>
                </div>

                <div className='w-full flex items-center justify-end'>
                    <DialogClose className=''>
                        <Button type='submit'>Add task</Button>
                    </DialogClose>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default AddCard