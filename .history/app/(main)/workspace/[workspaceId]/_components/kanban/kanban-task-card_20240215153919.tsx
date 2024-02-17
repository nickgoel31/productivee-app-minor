"use client"

import { Task } from '@/types/kanban'
import React, { useState } from 'react'

interface Props{
    task: Task
}

const KanbanTaskCard = ({task}:Props) => {
    
    const [focusMode, setFocusMode] = useState(false)

    const onClick = () => {
        setFocusMode(!focusMode)
    }

  return (
    <div onClick={() => {onClick}} className='border bg-neutral-900 rounded p-3 cursor-pointer'>
        <h4 className='text-sm text-neutral-200'>{task.title}</h4>
    </div>
  )
}

export default KanbanTaskCard