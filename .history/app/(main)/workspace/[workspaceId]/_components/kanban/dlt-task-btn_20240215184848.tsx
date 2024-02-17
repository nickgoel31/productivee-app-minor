import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const DeleteTaskBtn = () => {

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
                            <AlertDialogAction className='p-0 bg-transparent border-none rounded'>
                                <Button onClick={() => {handleDeleteTask}} variant={"destructive"}>
                                    Delete
                                </Button>   
                            </AlertDialogAction>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialog>
  )
}

export default DeleteTaskBtn