import { Task } from '@/types/kanban';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EditKanbanCardForm from './edit-card-form';
import { Edit } from 'lucide-react';

interface Props {
    workspaceId:string;
    task: Task;
}

const EditTaskKanban = ({workspaceId,task}:Props) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"} className='flex items-center gap-1'>
                <Edit />
                Edit Task
            </Button>
        </DialogTrigger>

        <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit "{task.title}"
                    </DialogTitle>
                    <DialogDescription>
                        edit the task thingys here
                    </DialogDescription>

                    {/* <EditKanbanCardForm 
                        taskId={task.id} 
                        prevTitle={task.title} 
                        prevDesc={task.description} 
                        prevTags={task.tags} 
                        column={col}
                        prevColumnId={task.columnId}
                        workspaceId={workspaceId}
                    /> */}
                </DialogHeader>


        </DialogContent>
    </Dialog>
  )
}

export default EditTaskKanban