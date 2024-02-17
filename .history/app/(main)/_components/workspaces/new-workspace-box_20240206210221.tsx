import { ChevronRightCircle, PlusCircle } from 'lucide-react'
import React from 'react'

const NewWorkspaceBox = () => {
  return (
    <div className='border rounded-md overflow-hidden cursor-pointer group relative flex items-center justify-center flex-col'>
        <PlusCircle size={20}/>
    </div>
  )
}

export default NewWorkspaceBox