import React from 'react'

const SubtaskCard = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <h4 className='text-sm font-medium text-neutral-300'>make a navbar</h4>
    </div>
  )
}




export const AddNewSubtaskCard = () => {
    return (
        <div className='group flex items-center justify-center w-full'>
            <h4 className='text-sm font-medium text-neutral-300 text-center group-hover:text-neutral-100 transition'>Add a task +</h4>
        </div>
      )
}

export default SubtaskCard