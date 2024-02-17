import { Task } from '@/types/kanban';
import React from 'react'

interface Props {
    workspaceId:string;
    task: Task;
}

const EditTaskKanban = ({workspaceId,task}:Props) => {
  return (
    <div>EditTaskKanban</div>
  )
}

export default EditTaskKanban