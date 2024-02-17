"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Delete } from 'lucide-react'
import React, { useState } from 'react'

const TodoCard = () => {

    const [isDone, setIsDone] = useState(false)

    const onClick = () => {
        setIsDone(!isDone)
    }

  return (
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-96'>
        <div className='flex items-center gap-3'>
            <Checkbox />
            <h2 className='font-medium text-lg line-clamp-1'>Buy milk</h2>
        </div>
        <div>
            <div>
                <Switch className='h-4 w-7'/>
            </div>
        </div>
    </div>
  )
}

export default TodoCard