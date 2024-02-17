import { ChevronRightCircle } from 'lucide-react'
import React from 'react'

const NewWorkspaceBox = () => {
  return (
    <div className='border rounded-md overflow-hidden cursor-pointer group relative'>

        <div className='absolute bottom-0 flex justify-between gap-1 py-4 px-3 items-end w-full h-[70%] bg-gradient-to-t from-black via-black/60 to-transparent group-hover:text-green-400 transition'>
            <h2 className='line-clamp-1 font-medium text-sm'>Workspace Name</h2>
            <ChevronRightCircle className='shrink-0' size={20}/>
        </div>
    </div>
  )
}

export default NewWorkspaceBox