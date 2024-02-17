import React from 'react'
import WorkspaceBox from '../_components/workspaces/workspace-box'

const WorkspacePage = () => {
  return (
    <div className='flex py-14 flex-col gap-7 h-full w-full pr-10'>
        <h1 className='text-3xl font-semibold'>Your Workspaces</h1>

        <div className='w-full grid grid-cols-4 gap-7'>
            <WorkspaceBox />
            
        </div>
    </div>
  )
}

export default WorkspacePage