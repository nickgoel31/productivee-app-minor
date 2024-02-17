import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { WorkspaceEditProps} from "@/types"
import { Input } from '@/components/ui/input'
  

const EditWorkspaceBtn = ({name,id,description,createdAt}:WorkspaceEditProps) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className="">
            Edit
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
            <DialogTitle>Edit Workspace</DialogTitle>
            <DialogDescription>
                You can edit workspace here.
            </DialogDescription>
            </DialogHeader>

            <div>
                {/* TODO EDIT NAME */}
                <label htmlFor="name" className='text-sm'>Workspace Name</label>
                <Input name='name'/>
            </div>


        </DialogContent>
    </Dialog>
  )
}

export default EditWorkspaceBtn