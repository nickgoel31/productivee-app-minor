

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
import { getAllSubtasks } from '@/data/subtasks';
import { Textarea } from '@/components/ui/textarea';
import QuillEditor from '../../_components/Editor/QuillEditor';
import KanbanBoardBtn from './_components/kanban/KanbanBoardBtn';
import WhiteBoardBtn from './_components/whiteboard/WhiteBoardBtn';
import NotesBtn from './_components/notes/NotesBtn';


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

  if(userId !== workspace.userId) {
    return Response.redirect(new URL("/sign-in"))
  }

  const todos = workspace.todos;
  const {imageUrl} = workspace;

  const sortedTodos= todos.sort(function (a, b) {
    return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
  })

  const workspaceId = workspace.id


  return (
    <ScrollArea className='h-full w-full pr-10 '>
      <div className='py-6 flex flex-col gap-10 relative h-full w-full '>

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



        
        {/* LIST OF THINGS USER CAN DO */}

        <div className='flex items-center justify-start gap-10'>
          <KanbanBoardBtn />
          <WhiteBoardBtn />
          <NotesBtn />
        </div>


        {/* <div className='px-2 flex flex-col w-full gap-4 items-center'>
          <h3 className='font-semibold text-xl'>Notes</h3>
          <QuillEditor />
        </div> */}
      </div>

    </ScrollArea>
  )
}

export default WorkspaceIdPage