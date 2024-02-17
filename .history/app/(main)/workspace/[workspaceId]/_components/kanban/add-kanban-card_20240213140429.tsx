"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SetCardsProps } from '@/interfaces'
import React, { useState } from 'react'



const AddCard = ({setCards}:SetCardsProps) => {

    const [text,setText] = useState("");
    const [adding,setAdding] = useState(false)


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

            <div className='space-y-1'>
                <Label>Title</Label>
                <Input type='text' placeholder='eg- Make a new navbar'/>
            </div>

            <div className='w-full flex items-center justify-end'>
                <DialogClose className=''>
                    <Button>Add task</Button>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AddCard