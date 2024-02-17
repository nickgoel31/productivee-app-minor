

import { getWorkspaceById } from '@/actions/get-workspace';
import { formatDate } from '@/helpers/format-date';
import { Cat, Trash2 } from 'lucide-react';
import React from 'react'
import TodoCard from '../../_components/todo-card';
import NewTodoAdd from '../../_components/new-todo-add';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';


interface IParams{
  workspaceId: string;
}


const WorkspaceIdPage = async ({params}:{params: IParams}) => {

  const workspace = await getWorkspaceById(params)

  if(!workspace) return (
    <div>NO WORKSPACE FOUND GO BACK</div>
  );

  const todos = workspace.todos;

  const sortedTodos= todos.sort(function (a, b) {
    return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
  })

  console.log(workspace)

  return (
    <ScrollArea className=' h-full w-full pr-10'>
      <div className='py-14 flex flex-col gap-7'>

        <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col space-y-2'>
            <h1 className='font-semibold text-4xl'>{workspace.name}</h1>
            <p className='font-medium text-neutral-500'>{workspace.description}</p>
          </div>

          <div>
            <Button variant={"outline"} className='p-2 text-destructive border-red-500 dark:text-red-500'>
              <Trash2 />
            </Button>
          </div>
        </div>
        {/* <p>{formatDate(workspace.createdAt)}</p> */}

        <div className='flex flex-col w-full gap-4 items-center'>
          {!todos[0] && (
              <div className="flex flex-col items-center gap-2 mt-6 text-neutral-600">
                <Cat size={72} />
                <h3 className="text-3xl font-semibold text-center">Create a todo item!</h3>
              </div>
            )}

          <div className="flex flex-col gap-3">
                {sortedTodos.map((todo) => (
                    <TodoCard id={todo.id} key={todo.id} title={todo.title} isDone={todo.isDone} workspaceId={workspace.id}/>
                ))}
          </div>
          <NewTodoAdd workspaceId={workspace.id}/>
        </div>
      </div>

    </ScrollArea>
  )
}

export default WorkspaceIdPage