import { Button } from '@/components/ui/button'
import { Column } from '@/types/kanban'
import React, { useState } from 'react'

const KanbanPage = () => {

  const [columns, setColumns] = useState<Column[]>([])


  return (
    <div className='py-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <div>
        <Button>Add bew column</Button>
      </div>


    </div>
  )
}

export default KanbanPage