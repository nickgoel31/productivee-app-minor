import React from 'react'
import WorkspaceBox from '../_components/workspaces/workspace-box'

const WorkspacePage = () => {
  return (
    <div className='flex py-14 flex-col gap-3'>
        <h1 className='text-3xl font-semibold'>Your Workspaces</h1>

        <WorkspaceBox />
    </div>
  )
}

export default WorkspacePage