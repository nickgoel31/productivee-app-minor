"use client"

import { Task } from '@/types/kanban'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Props{
    task: Task
}

const KanbanTaskCard = ({task}:Props) => {
    
    const [focusMode, setFocusMode] = useState(false)
    const [editMode, setEditMode] = useState(false);

    const onClick = () => {
        setFocusMode(!focusMode)
        setEditMode(!editMode)

        setTimeout(() => {
            setFocusMode(false)
        },2000)
    }

    // const editClick = () => {
    //     if(focusMode){
    //         setEditMode(true)
    //     }
    // }

  return (
    <>
        {!focusMode && (
            <div onClick={() => onClick()} className='border bg-neutral-900 rounded p-3 cursor-pointer'>
                <h4 className='text-sm text-neutral-200'>{task.title}</h4>
            </div>
        )}
        {editMode && (
            <Dialog>
            <DialogTrigger>
                <div className='border bg-neutral-900 rounded p-3 cursor-pointer'>
                    <h4 className='text-sm text-neutral-200'>{task.title}</h4>
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit {task.title}
                    </DialogTitle>
                    <DialogDescription>
                        edit the task thingys here
                    </DialogDescription>
                </DialogHeader>


            </DialogContent>
        </Dialog>
        )}
    </>
  )
}

export default KanbanTaskCard