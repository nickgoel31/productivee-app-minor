import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteLegacyTask = () => {
  return (
    <div>
        <button className='p-2 border rounded hover:bg-neutral-500/15 transition'>
            <Trash2 size={18} className='text-red-500'/>
        </button>
    </div>
  )
}

export default DeleteLegacyTask