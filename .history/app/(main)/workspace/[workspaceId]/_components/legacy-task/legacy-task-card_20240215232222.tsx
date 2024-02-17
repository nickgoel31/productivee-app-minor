import { LegacyTask } from '@/types/legacy-task'
import React from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div className='border p-3 w-full'>
        <h6 className='font-medium'>{task.title}</h6>
    </div>
  )
}

export default LegacyTaskCard