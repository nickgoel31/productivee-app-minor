import { LegacyTask } from '@/types/legacy-task'
import React from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div className='border p-2 w-full'>
        {task.title}
    </div>
  )
}

export default LegacyTaskCard