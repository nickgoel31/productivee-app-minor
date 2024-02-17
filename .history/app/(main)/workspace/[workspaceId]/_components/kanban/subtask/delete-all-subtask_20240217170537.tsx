
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'

const DeleteAllKanbanSubtasksBtn = ({taskId}:{taskId:string}) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete all subtasks</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAllKanbanSubtasksBtn