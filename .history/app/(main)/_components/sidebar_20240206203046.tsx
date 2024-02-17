import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-background border-r h-full gap-8 flex flex-col items-center px-6 py-14'>
        <h2 className='font-semibold text-2xl'>Todo App</h2>

        <div className='flex flex-col gap-3 items-center'>
            <li>Overview</li>
        </div>
    </div>
  )
}

export default Sidebar