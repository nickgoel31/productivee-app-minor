"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { WorkspaceEditProps} from "@/types"
import { Input } from '@/components/ui/input'
import DeleteWorkspaceBtn from './delete-workspace-button'
  

const EditWorkspaceBtn = ({name,id,description,createdAt}:WorkspaceEditProps) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className="">
            Edit
            </Button>
        </DialogTrigger>

        <DialogContent className='w-full'>
            <DialogHeader>
            <DialogTitle>Edit Workspace</DialogTitle>
            <DialogDescription>
                You can edit workspace here.
            </DialogDescription>
            </DialogHeader>

            <div className='space-y-6 w-full'>
                {/* TODO EDIT NAME */}
                <div className='space-y-4'>
                    <div className='space-y-1'>
                        <label htmlFor="name" className='text-sm font-medium ml-1'>Workspace Name</label>
                        <Input name='name' value={name}/>
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="description" className='text-sm font-medium ml-1'>Description</label>
                        <Input name='description' value={description || ""}/>
                    </div>
                </div>

                <DialogClose className='w-full items-end justify-end flex'>
                    <Button>Save Changes</Button>
                </DialogClose>



                <div className='p-3 px-5 border-2 rounded-lg border-dashed border-destructive'>
                    <h3 className='font-semibold text-destructive dark:text-red-500 mb-1'>Danger zone</h3>
                    <p className='text-sm text-neutral-400 mb-3'>This action can't be  undone.</p>
                    <DeleteWorkspaceBtn workspaceId={id}/>
                </div>
            </div>


        </DialogContent>
    </Dialog>
  )
}

export default EditWorkspaceBtn