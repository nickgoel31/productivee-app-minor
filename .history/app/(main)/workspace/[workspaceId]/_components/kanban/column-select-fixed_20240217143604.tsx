"use client"

import { columns } from '@/data/kanban'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const ColumnSelect = ({prevColumnId}:{prevColumnId:number}) => {

    const [activeColumn, setActiveColumn] = useState<number>(prevColumnId)

    const handleColumns = (columnId: number) => {
        if(activeColumn === columnId) return;
        else {
            setActiveColumn(columnId)
        }
    }

  return (
    <div className='flex w-full gap-2 '>
        {columns.map((col) => (
            <div 
            className={cn(`text-xs text-neutral-300 border rounded-full p-1.5 select-none cursor-pointer px-3 lowercase hover:bg-neutral-300/10 transition`, activeColumn === col.id && "bg-neutral-200 text-neutral-950 font-medium hover:bg-neutral-200/80")}
            key={col.id}
            onClick={() => {handleColumns(col.id)}} >
                <p className="capitalize">{col.title}</p>
            </div>
        ))}
    </div>
  )
}

export default ColumnSelect