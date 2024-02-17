"use client"

import { updateAllIsDoneKanbanSubtaskInDB } from '@/actions/kanban-subtasks/edit-kanban-subtask';
import { Button } from '@/components/ui/button'
import React from 'react'

const MarkAllKanbanSubtaskBtn = ({taskId}:{taskId:string}) => {

    const handleMarkAllSubtasksComplete = () => {
        updateAllIsDoneKanbanSubtaskInDB(taskId);
      }

  return (
    <Button onClick={handleMarkAllSubtasksComplete}  variant={"outline"} size={"sm"} className='text-xs' >Mark all complete</Button>
  )
}

export default MarkAllKanbanSubtaskBtn