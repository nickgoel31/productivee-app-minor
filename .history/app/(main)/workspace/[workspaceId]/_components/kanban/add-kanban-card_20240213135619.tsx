import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const AddCard = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button className='' variant={"outline"}>Add a new task +</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogTitle>
                Add a new task
            </DialogTitle>
            <DialogDescription>by clicking add you will be able to create a new task.</DialogDescription>
        </DialogContent>
    </Dialog>
  )
}

export default AddCard