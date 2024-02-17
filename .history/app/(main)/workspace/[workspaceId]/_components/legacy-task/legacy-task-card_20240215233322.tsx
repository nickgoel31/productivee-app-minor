"use client"

import { Button } from '@/components/ui/button'
import { LegacyTask } from '@/types/legacy-task'
import { ChevronDown, ChevronRight, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {

    const [isTaskExpanded, setIsTaskExpanded] = useState(false)

  return (
    <div className='flex flex-col w-full border rounded'>
        <div className=' p-2 px-4 w-full  flex items-center justify-between'>
            <div className='flex items-center gap-1' onClick={() => setIsTaskExpanded(!isTaskExpanded)}>
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
            <div className='flex flex-col items-center justify-center'>
                <h2>Hello</h2>
            </div>
        )}
    </div>
  )
}

export default LegacyTaskCard