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

const DeleteWorkspaceBtnHome = ({workspaceId}:{workspaceId:string}) => {
  return (
    <AlertDialog>
    <AlertDialogTrigger>
        <Button variant={"outline"} className="border-destructive text-red-500">
            Delete
        </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>

  )
}

export default DeleteWorkspaceBtnHome