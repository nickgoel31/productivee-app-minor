import { LegacyTask } from '@/types/legacy-task'
import React from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div className='border p-3 px-4 w-full rounded flex items-center justify-between'>
        <h6 className='font-medium'>{task.title}</h6>

        <div className='flex items-center gap-3'>

        </div>
    </div>
  )
}

export default LegacyTaskCard