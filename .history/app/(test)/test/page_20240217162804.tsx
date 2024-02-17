"use client"

import { useKanbanTasks } from '@/hooks/useKanbanTasks';
import { Task } from '@/types/kanban';
import React from 'react'

const TestPage = () => {

  const workspaceId = "6c2464f1-ecba-45d6-bfd2-2ba6d9929bf3"

  const kanban= useKanbanTasks(workspaceId)
  if(!kanban) return;
  const {tasks} = kanban

  console.log(tasks)

  return (
    <div>TestPage</div>
  )
}

export default TestPage