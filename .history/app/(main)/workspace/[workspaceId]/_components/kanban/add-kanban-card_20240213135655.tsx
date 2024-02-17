import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
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

            <Input type='text'/>
        </DialogContent>
    </Dialog>
  )
}

export default AddCard