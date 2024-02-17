
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'

const DeleteAllKanbanSubtasksBtn = ({taskId}:{taskId:string}) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete all subtasks</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This action can't be undone! It will delete all subtasks associated with this task.</AlertDialogDescription>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAllKanbanSubtasksBtn