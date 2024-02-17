import React from 'react'
import WorkspaceBox from '../_components/workspaces/workspace-box'
import NewWorkspaceBox from '../_components/workspaces/new-workspace-box'
import { getAllWorkspaces } from '@/data/workspaces'

const WorkspacePage = async () => {


  const workspaces = await getAllWorkspaces();

  return (
    <div className='flex  flex-col gap-7 h-full w-full pr-10'>
        <h1 className='text-3xl font-semibold'>Your Workspaces</h1>

        <div className='w-full grid grid-cols-4 gap-7'>
            {workspaces.map((workspace) => (
              <WorkspaceBox id={workspace.id} key={workspace.id} name={workspace.name} desc={workspace.description}/>
            ))}
            
            <NewWorkspaceBox workspaces= {workspaces} />
        </div>
    </div>
  )
}

export default WorkspacePage