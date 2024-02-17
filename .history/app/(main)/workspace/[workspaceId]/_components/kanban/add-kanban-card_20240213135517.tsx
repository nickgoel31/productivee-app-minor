import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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
        </DialogContent>
    </Dialog>
  )
}

export default AddCard