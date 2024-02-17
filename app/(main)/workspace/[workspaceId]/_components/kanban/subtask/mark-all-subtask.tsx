"use client"

import { updateAllIsDoneKanbanSubtaskInDB } from '@/actions/kanban-subtasks/edit-kanban-subtask';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const MarkAllKanbanSubtaskBtn = ({taskId}:{taskId:string}) => {

    const router = useRouter();

    function handleMarkAllSubtasksComplete () {
        updateAllIsDoneKanbanSubtaskInDB(taskId);
        router.refresh()
    }

  return (
    <Button onClick={handleMarkAllSubtasksComplete}  variant={"outline"} size={"sm"} className='text-xs' >Mark all complete</Button>
  )
}

export default MarkAllKanbanSubtaskBtn