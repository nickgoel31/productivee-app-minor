"use client"

import { Trash2 } from 'lucide-react'
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { deleteLegacyTaskInDB } from '@/actions/legacy-tasks/delete-task';

const DeleteLegacyTask = ({taskName,taskId}:{taskName:string, taskId:string}) => {

    const handleDeleteLegacyTask = () => {
        deleteLegacyTaskInDB(taskId)
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <button className='p-2 border rounded hover:bg-neutral-500/15 transition'>
                <Trash2 size={18} className='text-red-500'/>
            </button>
        </AlertDialogTrigger>

        <AlertDialogContent>

            <AlertDialogHeader>
                <AlertDialogTitle>
                    Delete task &quot;{taskName}&quot;
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. Are you sure?
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>

                <AlertDialogAction className='p-0 bg-transparent border-none rounded'>
                    <Button onClick={handleDeleteLegacyTask} variant={"destructive"} className='w-full'>
                        Delete
                    </Button>   
                </AlertDialogAction>
            </AlertDialogFooter>

        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteLegacyTask