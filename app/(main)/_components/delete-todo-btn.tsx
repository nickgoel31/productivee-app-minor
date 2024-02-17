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
import { deleteTodoInDB } from '@/actions/delete-todo'
  

const DeleteTodoButton = ({id,title} : {id:string, title:string}) => {

    const deleteTodoClick = () => {
        deleteTodoInDB(id);
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <div className='text-destructive dark:text-red-500 cursor-pointer p-1 rounded-sm hover:bg-red-500/10 transition'>
                <Trash2 size={20} />
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
                By clicking delete, you will delete "{title}" todo item
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-red-700 text-white hover:opacity-70 hover:bg-red-700' onClick={deleteTodoClick}>Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteTodoButton