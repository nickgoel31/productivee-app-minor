"use client"

import { Button } from '@/components/ui/button'
import { LegacyTask, SubTask } from '@/types/legacy-task'
import { CheckCheck, ChevronDown, ChevronRight, Edit3, Trash2, Undo, Undo2, UndoDot } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import SubtaskCard, { AddNewSubtaskCard } from './subtask-card'
import { updateLegacyTaskInDB } from '@/actions/legacy-tasks/update-task'
import { cn } from '@/lib/utils'

interface Props{
    task: LegacyTask;
    subtasks: SubTask[] | undefined;
}

const LegacyTaskCard = ({task,subtasks}:Props) => {

    const [isTaskExpanded, setIsTaskExpanded] = useState(false)

    const [isLegacyTasksDone, setIsLegacyTasksDone] = useState(task.isDone)

    const hasSubtasks = subtasks ?  subtasks.length > 0 : false


    const handleLegacyTaskDoneClick = () => {
        setIsLegacyTasksDone(!isLegacyTasksDone)
        updateLegacyTaskInDB(task.id, isLegacyTasksDone)
    }

  return (
    <div className='flex flex-col w-full border rounded p-2 px-4 gap-2'>
        <div className=' w-full  flex items-center justify-between '>
            <div className='flex items-center gap-1 cursor-pointer' onClick={() => setIsTaskExpanded(!isTaskExpanded)}>
                {isTaskExpanded ? (
                    <div className='p-1 cursor-pointer hover:bg-neutral-500/15 transition rounded'>
                        <ChevronDown size={21}/>
                    </div>
                ) : (
                    <div className='p-1 cursor-pointer hover:bg-neutral-500/15 transition rounded'>
                        <ChevronRight size={21}/>
                    </div>
                )}

                <div className='flex items-center gap-2'>
                    <h6 className={cn('font-medium select-none', task.isDone && "line-through text-neutral-500")}>{task.title}</h6>
                    <Edit3 size={20}/>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <button onClick={handleLegacyTaskDoneClick} className='p-2 border rounded hover:bg-neutral-500/15 transition'>
                    {!task.isDone ? (
                        <CheckCheck size={18} className='text-neutral-300'/>
                    ) : (
                        <Undo size={18} className='text-neutral-300'/>
                    )}
                </button>
                <button className='p-2 border rounded hover:bg-neutral-500/15 transition'>
                    <Trash2 size={18} className='text-red-500'/>
                </button>
            </div>
        </div>

        {isTaskExpanded && (
            <div className='flex flex-col px-10 pb-2 w-full gap-2'>
                <h2 className='font-medium text-sm text-neutral-200'>Subtasks</h2>

                {hasSubtasks ? (
                    (
                        <div className='flex flex-col w-full'>
                            {subtasks?.map((st) => (
                                <SubtaskCard subTask={st} taskIsDone={task.isDone}/>
                            ))}
                        </div>
                    )
                ) : (
                    <p className='text-muted-foreground font-medium text-xs italic'>No substasks found!</p>
                )}

                

                <div className='flex flex-col gap-2 px-1 w-full items-center justify-center'>
                    
                    {!task.isDone && (
                        <AddNewSubtaskCard taskId={task.id}/>
                    )}
                </div>
            </div>
        )}
    </div>
  )
}

export default LegacyTaskCard