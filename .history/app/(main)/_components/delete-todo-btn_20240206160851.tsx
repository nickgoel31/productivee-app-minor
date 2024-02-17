import { Trash2 } from 'lucide-react'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

const DeleteTodoButton = ({id} : {id:string}) => {

    const deleteTodoClick = () => {
        // Confirmation before deleting a todo.
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <div onClick={deleteTodoClick} className='text-destructive dark:text-red-500 cursor-pointer p-1 rounded-sm hover:bg-red-500/10 transition'>
                <Trash2 size={20} />
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
                By clicking delete, you will delete "" todo item
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteTodoButton