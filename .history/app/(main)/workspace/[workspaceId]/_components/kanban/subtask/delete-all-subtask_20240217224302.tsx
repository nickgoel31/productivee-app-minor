"use client"
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'
import { deleteAllKanbanSubtaskInTask } from '@/actions/kanban-subtasks/delete-kanban-subtasks'

const DeleteAllKanbanSubtasksBtn = ({taskId}:{taskId:string}) => {
    const handleClick = () => {
        deleteAllKanbanSubtaskInTask(taskId)
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete all <span className='hidden md:block'>&nbsp;subtasks</span></Button>
        </AlertDialogTrigger>

        <AlertDialogContent className='lg:w-full w-[95%]'>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action can&apos;t be undone! It will delete all subtasks associated with this task.</AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className='w-full flex items-center justify-end gap-1'>
                <AlertDialogCancel className='w-full'>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleClick} className='text-red-500 bg-transparent border hover:bg-neutral-400/10 transition w-full'>Delete All</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>

        
    </AlertDialog>
  )
}

export default DeleteAllKanbanSubtasksBtn