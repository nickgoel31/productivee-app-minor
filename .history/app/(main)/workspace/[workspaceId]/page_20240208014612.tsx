

import { getWorkspaceById } from '@/actions/get-workspace';
import { formatDate } from '@/helpers/format-date';
import { Cat, Trash2 } from 'lucide-react';
import React from 'react'
import TodoCard from '../../_components/todo-card';
import NewTodoAdd from '../../_components/new-todo-add';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';
import { deleteWorkspaceInDB } from '@/actions/delete-workspace';
import DeleteWorkspaceBtn from '../../_components/workspaces/delete-workspace-button';
import EditWorkspaceBtn from '../../_components/workspaces/edit-workspace-btn';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import DeleteWorkspaceBtnHome from '../../_components/workspaces/delete-workspace-md';


interface IParams{
  workspaceId: string;
}


const WorkspaceIdPage = async ({params}:{params: IParams}) => {

  const {userId} = auth()

    if(!userId) return Response.redirect(new URL("/sign-in"))

  const workspace = await getWorkspaceById(params,userId)

  if(!workspace) return (
    <div>NO WORKSPACE FOUND GO BACK</div>
  );

  const todos = workspace.todos;
  const {imageUrl} = workspace;

  const sortedTodos= todos.sort(function (a, b) {
    return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
  })

  const workspaceId = workspace.id


  return (
    <ScrollArea className=' h-full w-full pr-10'>
      <div className='py-6 flex flex-col gap-7 relative'>

        <div className='flex w-full items-center justify-between relative h-48 px-6 '>
          <div className='absolute h-full w-full top-0 left-0 z-[-10] object-contain overflow-hidden flex justify-center items-center'>
            <Image src={imageUrl} alt='' width={2000} height={2000} className=' opacity-40'/>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className='font-semibold text-4xl'>{workspace.name}</h1>
            <p className='font-medium text-neutral-500'>{workspace.description}</p>
          </div>

          <div className='flex items-center gap-3'>
            <EditWorkspaceBtn name={workspace.name} id={workspace.id} description={workspace.description} createdAt={workspace.createdAt.toString()}/>
            <div className='2xl:hidden block'>
              <DeleteWorkspaceBtnHome workspaceId={workspaceId}/>
            </div>
          </div>
        </div>
        {/* <p>{formatDate(workspace.createdAt)}</p> */}

        <div className='flex flex-col w-full gap-4 items-center'>
          {!todos[0] && (
              <div className="flex flex-col items-center gap-2 mt-6 text-neutral-400">
                {/* <Cat size={72} /> */}
                <h3 className=" font-medium text-center">No todo items in this workspace! Click on add a todo to get started.</h3>
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