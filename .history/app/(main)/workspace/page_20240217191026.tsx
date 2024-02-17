import React from 'react'
import WorkspaceBox from '../_components/workspaces/workspace-box'
import NewWorkspaceBox from '../_components/workspaces/new-workspace-box'
import { getAllWorkspaces } from '@/data/workspaces'
import { auth } from '@clerk/nextjs'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const WorkspacePage = async () => {

  const {userId} = auth();

  if(!userId) return null;

  const workspaces = await getAllWorkspaces(userId);

  
  

  return (
    <div className='flex py-8 flex-col gap-8 h-full w-full pr-10'>
        <h1 className='text-3xl font-semibold'>Your Workspaces</h1>

        <div className='w-full grid grid-cols-4 gap-7'>
            {workspaces.map((workspace) => (
              <WorkspaceBox id={workspace.id} key={workspace.id} name={workspace.name} desc={workspace.description} imageUrl={workspace.imageUrl}/>
            ))}
            
            <NewWorkspaceBox workspaces= {workspaces} />
        </div>

        

    </div>
  )
}

export default WorkspacePage