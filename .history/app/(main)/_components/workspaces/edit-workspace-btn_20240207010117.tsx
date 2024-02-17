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
import {Workspace} from "@/types"
  

const EditWorkspaceBtn = () => {
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
            </div>


        </DialogContent>
    </Dialog>
  )
}

export default EditWorkspaceBtn