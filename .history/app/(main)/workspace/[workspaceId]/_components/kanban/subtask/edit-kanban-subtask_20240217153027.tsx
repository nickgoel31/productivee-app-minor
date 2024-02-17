import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const EditKanbanSubtask = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <button className='border text-xs font-medium p-1.5 px-3 hover:bg-neutral-500/20 transition'>Edit</button>
        </DialogTrigger>
    </Dialog>
  )
}

export default EditKanbanSubtask