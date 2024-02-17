"use client"

import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { deleteTaskById } from '@/actions/tasks/delete-task';
import { redirect, useRouter } from 'next/navigation';

const DeleteTaskBtn = ({taskId,workspaceId}: {taskId:string, workspaceId: string}) => {
    const router = useRouter();
    const handleDeleteTask = () => {
        deleteTaskById(taskId, workspaceId);
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
                            
                                <Button onClick={() => {handleDeleteTask}} variant={"destructive"}>
                                    Delete
                                </Button>   
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialog>
  )
}

export default DeleteTaskBtn