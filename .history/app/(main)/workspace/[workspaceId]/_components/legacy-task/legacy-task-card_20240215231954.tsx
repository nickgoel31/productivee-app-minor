import { LegacyTask } from '@/types/legacy-task'
import React from 'react'

interface Props{
    task: LegacyTask
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div className='border p-2 max-w-screen-md'>
        {task.title}
    </div>
  )
}

export default LegacyTaskCard