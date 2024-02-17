"use client"

import { Button } from '@/components/ui/button'
import { LegacyTask, SubTask } from '@/types/legacy-task'
import { ChevronDown, ChevronRight, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import SubtaskCard, { AddNewSubtaskCard } from './subtask-card'

interface Props{
    task: LegacyTask;
    subtasks: SubTask[] | undefined;
}

const LegacyTaskCard = ({task,subtasks}:Props) => {

    const [isTaskExpanded, setIsTaskExpanded] = useState(false)

    const hasSubtasks = subtasks ?  subtasks.length > 0 : false

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

                <h6 className='font-medium select-none'>{task.title}</h6>
            </div>

            <div className='flex items-center gap-3'>
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
                        <div>
                            {subtasks?.map((st) => (
                                <SubtaskCard subTask={st}/>
                            ))}
                        </div>
                    )
                ) : (
                    <p className='text-muted-foreground font-medium text-xs italic'>No substasks found!</p>
                )}

                

                <div className='flex flex-col gap-2 px-1 w-full items-center justify-center'>
                    
                    
                    <AddNewSubtaskCard taskId={task.id}/>
                </div>
            </div>
        )}
    </div>
  )
}

export default LegacyTaskCard