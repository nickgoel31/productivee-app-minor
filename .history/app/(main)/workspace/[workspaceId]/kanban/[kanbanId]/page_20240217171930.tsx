import { Button } from '@/components/ui/button';
import { getTaskById } from '@/helpers/getTask';
import { Column, Task } from '@/types/kanban';
import { StepBack } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import EditTaskKanban from '../../_components/kanban/edit-task-kanban';
import { getColumnById } from '@/helpers/getColumn';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ColumnSelect from '../../_components/kanban/column-select-fixed';
import { ScrollArea } from '@/components/ui/scroll-area';
import KanbanSubtaskCard from '../../_components/kanban/subtask/kanban-subtask-card';
import AddKanbanSubtaskCard from '../../_components/kanban/subtask/add-kanban-subtask-card';
import { getAllKanbanSubtasksByTaskId } from '@/helpers/getKanbanSubtask';
import DeleteAllKanbanSubtasksBtn from '../../_components/kanban/subtask/delete-all-subtask';

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = async ({params} : KanbanParams) => {

    const {workspaceId, kanbanId} = params

    const task = await getTaskById(kanbanId,workspaceId);
    if(!task) redirect("/workspace")

    const subtasks = await getAllKanbanSubtasksByTaskId(task.id)
    const sortedSubtasks = subtasks?.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1; // `a` comes before `b`
      }
      if (a.createdAt > b.createdAt) {
        return 1; // `a` comes after `b`
      }
      return 0; // `a` and `b` are considered equal
    });

    const column:Column = getColumnById(task.columnId)

    const isMoreThanThreeTags = task.tags.length > 3 ? true : false;
    

  return (
    <ScrollArea className='w-full h-full px-4 py-1'>
      <div className='flex flex-col gap-4 pr-10 pt-6 pb-2 '>
        <div className='flex items-center w-full justify-between h-full relative '>
            <div className='space-y-1 flex items-center gap-x-3'>
              <h2 className='text-2xl font-semibold'>{task.title}</h2>
              <div className='flex items-center gap-1'>
                {task.tags.slice(0, 3).map((tag,index) => (
                  <div key={index} className='text-xs font-medium p-1 px-3 rounded-full border'>
                    {tag}
                  </div>
                ))}
                {isMoreThanThreeTags && (
                  <HoverCard>
                    <HoverCardTrigger>
                        <p className='text-xs cursor-pointer'>+{task.tags.length - 3} more</p>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit">
                      <div className='flex flex-col gap-2 items-start text-sm w-fit'>
                        <h4 className='font-semibold'>Tags</h4>
                        <div className='flex items-center gap-1'>
                          {task.tags.map((tag,index) => (
                            <div key={index} className='text-xs font-medium p-1 px-3 rounded-full border'>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>
            </div>

            <div className='flex gap-4 items-center'>
                <Button variant={"outline"} asChild>
                    <Link href={`/workspace/${workspaceId}`}>
                    <StepBack size={17} className='mr-1'/> 
                    Go back
                    </Link>
                </Button>

                <EditTaskKanban workspaceId={workspaceId} task={task} col={column}/>
            </div>
      </div>

        <div className=''>
          <div className='flex flex-col item'>
              <p className=' text-muted-foreground text-sm'>
              {task.description}
              
            </p>
          </div>

          <div className='fixed bottom-5 p-2 bg-background border rounded-full right-5 z-10'>
            <ColumnSelect prevColumnId={task.columnId} taskId={task.id} workspaceId={task.workspaceId}/>
          </div>

      </div>

      <div>

      </div>
      </div>

        <div className='w-full flex flex-col gap-7'>
          <div className='flex items-center justify-between gap-1 pr-4'>
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-semibold text-neutral-200'>Subtasks</h4>
              <p className='text-muted-foreground text-xs'>
                Drag and drop to reorder subtasks, click on a subtask to edit it directly.
              </p>
            </div>

            <div className='flex items-center gap-4'>
              <DeleteAllKanbanSubtasksBtn taskId={task.id}/>
              <Button variant={"outline"}>Mark all complete</Button>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3 w-full'>
              {subtasks ? (
                <>
                  {sortedSubtasks?.map((st) => (
                  <KanbanSubtaskCard subtask={st} workspaceId={task.workspaceId}/>
                  ))}
                </>
              ) : (
                <p className='text-xs font-medium text-muted-foreground text-center'>
                  No subtasks created yet! Click the '+' button below to add one.
                </p>
              )}
              
            </div>
            <AddKanbanSubtaskCard taskId={kanbanId}/>
          </div>
        </div>
      </ScrollArea>
  )
}

export default KanbanTaskPage