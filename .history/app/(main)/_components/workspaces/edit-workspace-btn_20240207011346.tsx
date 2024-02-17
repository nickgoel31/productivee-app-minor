"use client"

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
import DeleteWorkspaceBtn from './delete-workspace-button'
  

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

            <div className='space-y-6'>
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

                <div className='p-3 px-5 border-2 rounded-lg border-dashed border-destructive space-y-1'>
                    <h3 className='font-semibold text-destructive dark:text-red-500'>Danger zone</h3>
                    <p className='text-sm text-neutral-400 mb-2'>This action can't be  undone.</p>
                    <DeleteWorkspaceBtn workspaceId={id}/>
                </div>
            </div>


        </DialogContent>
    </Dialog>
  )
}

export default EditWorkspaceBtn