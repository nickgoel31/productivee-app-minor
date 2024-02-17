"use client"

import { addTaskInDB } from '@/actions/tasks/add-task'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { FormEvent, useState } from 'react'
import { z } from "zod"
 
const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    })
})



const AddCard = ({workspaceId} : {workspaceId:string}) => {

    // const [adding,setAdding] = useState(false)
    const 

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        addTaskInDB(text, workspaceId);
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

            <Form>
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
            </Form>
            
        </DialogContent>
    </Dialog>
  )
}

export default AddCard