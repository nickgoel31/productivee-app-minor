import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const DeleteAllKanbanSubtasksBtn = ({taskId}:{taskId:string}) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete all subtasks</Button>
        </DialogTrigger>
    </Dialog>
  )
}

export default DeleteAllKanbanSubtasksBtn