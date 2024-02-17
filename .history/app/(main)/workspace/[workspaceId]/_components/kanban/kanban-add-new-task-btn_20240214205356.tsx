import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';

const AddNewTaskKanban = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"}>Add a new task +</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a new task</DialogTitle>
                <DialogDescription>
                  Enter the title of your new task below.
                </DialogDescription>
            </DialogHeader>



        </DialogContent>
    </Dialog>
  )
}

export default AddNewTaskKanban