import React from 'react'

const KanbanCard = ({id, title} : {id:string, title:string}) => {
  return (
    <div key={id} draggable className='border p-3 w-full bg-neutral-900 rounded-lg cursor-grab'>
        <h3>{title}</h3>
    </div>
  )
}

export default KanbanCard