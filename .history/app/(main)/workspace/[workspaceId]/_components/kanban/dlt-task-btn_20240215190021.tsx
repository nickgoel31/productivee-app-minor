"use client"

import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { deleteTaskById } from '@/actions/tasks/delete-task';
import { redirect } from 'next/navigation';

const DeleteTaskBtn = ({taskId,workspaceId}: {taskId:string, workspaceId: string}) => {

    const handleDeleteTask = () => {
        // deleteTaskById(taskId, workspaceId);
        console.log("DELETED")
        
    }

  return (
    <AlertDialog>
                    <AlertDialogTrigger>
                        <Button variant={"outline"} className='text-red-500' type='button'>Delete Task</Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>

                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Delete task
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
                                <Button onClick={handleDeleteTask} variant={"destructive"}>
                                    Delete
                                </Button>   
                            </AlertDialogAction>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialog>
  )
}

export default DeleteTaskBtn