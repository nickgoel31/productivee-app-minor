import { ChevronRightCircle, PlusCircle } from 'lucide-react'
import React from 'react'

const NewWorkspaceBox = () => {
  return (
    <div className='border hover:border-green-400 rounded-md overflow-hidden cursor-pointer group relative flex items-center justify-center flex-col gap-2 hover:text-green-500 transition'>
        <PlusCircle size={20}/>
        <h2 className='font-medium text-sm'>New workspace</h2>
    </div>
  )
}

export default NewWorkspaceBox