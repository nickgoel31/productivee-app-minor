import React, { useState } from 'react'

const KanbanPage = () => {

  const [columns, setColumns] = useState([])


  return (
    <div className='py-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>


    </div>
  )
}

export default KanbanPage