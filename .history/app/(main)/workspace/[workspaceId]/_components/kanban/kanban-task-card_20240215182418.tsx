"use client"

import { Column, Task } from '@/types/kanban'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EditKanbanCardForm from './edit-card-form';
import { Trash2 } from 'lucide-react';

interface Props{
    task: Task;
    workspaceId: string;
    col: Column;
}

const KanbanTaskCard = ({task,workspaceId, col}:Props) => {
    
    // const [focusMode, setFocusMode] = useState(false)
    // const [editMode, setEditMode] = useState(false);

    // const onClick = () => {
    //     setFocusMode(!focusMode)
    //     setEditMode(!editMode)

    //     setTimeout(() => {
    //         setFocusMode(false)
    //     },2000)
    // }

    // const editClick = () => {
    //     if(focusMode){
    //         setEditMode(true)
    //     }
    // }

  return (
    <>
        <Dialog>
            <DialogTrigger>
            {col.id === 4 ? (
                <div className='border bg-neutral-900 rounded p-3 cursor-pointer flex items-start justify-between opacity-50'>
                    <h4 className='text-sm text-neutral-200 line-through'>{task.title}</h4>
                    <Trash2 size={16} className='text-red-500'/>
                </div>
            ) : (
                <>
                    {col.id === 3 ? (
                        <div className='border border-blue-500/20 shadow-lg shadow-blue-500/5 bg-neutral-900 rounded p-3 cursor-pointer flex items-start'>
                            <h4 className='text-sm text-neutral-200'>{task.title}</h4>
                        </div>
                    ) : (
                        <div className='border bg-neutral-900 rounded p-3 cursor-pointer flex items-start'>
                            <h4 className='text-sm text-neutral-200'>{task.title}</h4>
                        </div>
                    )}

                    
                </>
            )}

    
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit "{task.title}"
                    </DialogTitle>
                    <DialogDescription>
                        edit the task thingys here
                    </DialogDescription>

                    <EditKanbanCardForm 
                        taskId={task.id} 
                        prevTitle={task.title} 
                        prevDesc={task.description} 
                        prevTags={task.tags} 
                        column={col}
                        prevColumnId={task.columnId}
                        workspaceId={workspaceId}
                    />
                </DialogHeader>


            </DialogContent>
        </Dialog>
    </>
  )
}

export default KanbanTaskCard