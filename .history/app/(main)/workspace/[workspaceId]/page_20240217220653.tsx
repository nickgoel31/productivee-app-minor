

import { getWorkspaceById } from '@/actions/get-workspace';
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import EditWorkspaceBtn from '../../_components/workspaces/edit-workspace-btn';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import DeleteWorkspaceBtnHome from '../../_components/workspaces/delete-workspace-md';
import WhiteBoardBtn from './_components/whiteboard/WhiteBoardBtn';
import NotesBtn from './_components/notes/NotesBtn';
import KanbanBoardBtn from './_components/kanban/kanban-board-btn';
import LegacyTaskBtn from './_components/legacy-task/legacy-task-btn';


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

  const todos = workspace.tasks;
  const {imageUrl} = workspace;

  // const sortedTodos= todos.sort(function (a, b) {
  //   return new Date(a.createdAt).getTime( ) - new Date(b.createdAt).getTime();
  // })

  const workspaceId = workspace.id


  return (
    <ScrollArea className='h-full w-full lg:pr-10 pr-0'>
      <div className='py-6 flex flex-col gap-10 relative h-full w-full '>

        <div className='flex lg:w-full  items-center justify-between relative h-48 px-6 gap-4'>
          <div className='absolute h-full w-full top-0 left-0 z-[-10] object-contain overflow-hidden flex justify-center items-center'>
            <Image src={imageUrl} alt='' width={2000} height={2000} className=' opacity-40'/>
          </div>

          <div className='flex flex-col space-y-2'>
            <h1 className='font-semibold text-4xl'>{workspace.name}</h1>
            <p className='font-medium text-neutral-500'>{workspace.description}</p>
          </div>

          <div className='flex items-center gap-3'>
            <EditWorkspaceBtn name={workspace.name} id={workspace.id} description={workspace.description} createdAt={workspace.createdAt.toString()} imageUrl={imageUrl}/>
            <div className='2xl:hidden lg:block hidden'>
              <DeleteWorkspaceBtnHome workspaceId={workspaceId}/>
            </div>
          </div>
        </div>
        {/* <p>{formatDate(workspace.createdAt)}</p> */}



        
        {/* LIST OF THINGS USER CAN DO */}

        <div className='lg:flex-row md:flex-col flex flex-col items-center justify-start gap-7'>
          <KanbanBoardBtn workspaceId={workspace.id}/>
          <LegacyTaskBtn workspaceId={workspace.id} />
          {/* DISABLED FOR NOW (TODO) */}
          <WhiteBoardBtn workspaceId={workspace.id}/>
          <NotesBtn workspaceId={workspace.id}/>
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