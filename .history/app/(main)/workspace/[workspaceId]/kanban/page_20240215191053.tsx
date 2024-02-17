import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { StepBack } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AddNewTaskKanban from '../_components/kanban/kanban-add-new-task-btn';
import KanbanColumn from '../_components/kanban/kanban-column';
import { columns } from '@/data/kanban';
import { getAllTasksInWorkspace } from '@/helpers/getTask';
import { Task } from '@/types/kanban';

const KanbanPage = ({ params }: { params: { workspaceId: string } }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { workspaceId } = params;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getAllTasksInWorkspace(workspaceId);
        setTasks(fetchedTasks || []);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [workspaceId]);

  return (
    <div className='flex flex-col gap-6 pr-10 py-6'>
      <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>Kanban Board</h2>
          <p className='text-sm text-muted-foreground'>
            Drag and drop tasks to organize them in columns.
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <Button variant={'outline'}>
            <StepBack size={17} className='mr-1' /> Go back
          </Button>

          <AddNewTaskKanban workspaceId={workspaceId} />
        </div>
      </div>

      {/* ACTUAL KANBAN INTERFACE */}

      <div className='flex w-full'>
        <div className='flex gap-4 w-full min-h-[calc(100vh-200px)] '>
          {columns.map((col) => (
            <KanbanColumn key={col.id} col={col} tasks={tasks} workspaceId={workspaceId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanPage;
