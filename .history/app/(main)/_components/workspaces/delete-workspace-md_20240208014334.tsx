import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogFooter,
    AlertDialogAction,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import DeleteWorkspaceBtn from './delete-workspace-button'

const DeleteWorkspaceBtnHome = ({workspaceId}:{workspaceId:string}) => {
  return (
    <AlertDialog>
    <AlertDialogTrigger>
        <Button variant={"outline"} className=" text-red-600 hover:border-border">
            Delete workspace
        </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your workspace for our servers.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className='p-0 bg-none'>
            <DeleteWorkspaceBtn workspaceId={workspaceId}/>
        </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>

  )
}

export default DeleteWorkspaceBtnHome