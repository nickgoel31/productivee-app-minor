"use client"

import { updateAllIsDoneKanbanSubtaskInDB } from '@/actions/kanban-subtasks/edit-kanban-subtask';
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const MarkAllKanbanSubtaskBtn = ({taskId}:{taskId:string}) => {

    const [isDone,setIsDone] = useState(false);

    function handleMarkAllSubtasksComplete () {
        updateAllIsDoneKanbanSubtaskInDB(taskId);
    }

  return (
    <Button onClick={handleMarkAllSubtasksComplete}  variant={"outline"} size={"sm"} className='text-xs' >Mark all complete</Button>
  )
}

export default MarkAllKanbanSubtaskBtn