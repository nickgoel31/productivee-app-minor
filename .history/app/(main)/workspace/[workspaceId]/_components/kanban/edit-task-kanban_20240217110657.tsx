import { Task } from '@/types/kanban';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EditKanbanCardForm from './edit-card-form';

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