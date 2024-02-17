import React from 'react'

const KanbanCard = ({id, title, column} : {id:string, title:string, column:string}) => {
  return (
    <>
        <div draggable className='border p-3 w-full bg-neutral-900 rounded-lg cursor-grab active:cursor-grabbing'>
            <h3 className='text-neutral-100'>{title}</h3>
        </div>
    </>
  )
}

export default KanbanCard