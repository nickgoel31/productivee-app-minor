import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteTodoButton = () => {

    const deleteTodoClick = () => {
        // Confirmation before deleting a todo.
    }

  return (
    <div onClick={deleteTodoClick} className='text-destructive dark:text-red-500 cursor-pointer p-1 rounded-sm hover:bg-red-500/10 transition'>
        <Trash2 size={20} />
    </div>
  )
}

export default DeleteTodoButton