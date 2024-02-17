import React from 'react'

const KanbanCard = ({id, title, column} : {id:string, title:string, column:string}) => {
  return (
    <>
        <DropIndicator beforeId={id} column={column}/>
        <div draggable className='border p-3 mb-1 w-full bg-neutral-900 rounded-lg cursor-grab active:cursor-grabbing'>
            <h3 className='text-neutral-100'>{title}</h3>
        </div>
    </>
  )
}

export default KanbanCard

const DropIndicator = ({beforeId, column}:{beforeId:string, column:string}) => {
    return(
        <div className='my-0.5 h-0.5 w-full bg-violet-400 opacity-100'/>
    )
}