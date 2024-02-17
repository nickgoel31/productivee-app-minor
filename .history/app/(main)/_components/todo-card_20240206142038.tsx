"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Delete } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const TodoCard = () => {

    const [isDone, setIsDone] = useState(false)

    const onClick = () => {
        setIsDone(!isDone)
    }

    useEffect(() => {
        onClick();
    }, [onClick])

  return (
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-96'>
        <div className='flex items-center gap-3'>
            <Checkbox />
            <h2 className={cn('font-medium text-lg line-clamp-1', isDone ? "line-through" : "")}>Buy milk</h2>
        </div>
        <div>
            <div onClick={() => onClick}>
                <Switch className='h-4 w-7'/>
            </div>
        </div>
    </div>
  )
}

export default TodoCard