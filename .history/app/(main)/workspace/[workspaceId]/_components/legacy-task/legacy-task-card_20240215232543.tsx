import { Button } from '@/components/ui/button'
import { LegacyTask } from '@/types/legacy-task'
import { Trash2 } from 'lucide-react'
import React from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div className='border p-2 px-4 w-full rounded flex items-center justify-between'>
        <h6 className='font-medium'>{task.title}</h6>

        <div className='flex items-center gap-3'>
            <button className='p-2 border rounded hover:bg-neutral-500/15 transition'>
                <Trash2 size={18} className='text-red-500'/>
            </button>
        </div>
    </div>
  )
}

export default LegacyTaskCard