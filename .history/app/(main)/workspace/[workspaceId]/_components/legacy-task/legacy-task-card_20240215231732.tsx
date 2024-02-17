import { Task } from '@/types/kanban'
import React from 'react'

interface Props{
    task: Task
}

const LegacyTaskCard = ({task}:Props) => {
  return (
    <div>LegacyTaskCard</div>
  )
}

export default LegacyTaskCard