import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const AddCard = () => {
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

            <DialogClose>
                <Button>Add task</Button>
            </DialogClose>
        </DialogContent>
    </Dialog>
  )
}

export default AddCard