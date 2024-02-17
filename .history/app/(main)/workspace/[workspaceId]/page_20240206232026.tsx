

import { getWorkspaceById } from '@/actions/get-workspace';
import React from 'react'

interface IParams{
  workspaceId: string;
}


const WorkspaceIdPage = async ({params}:{params: IParams}) => {

  const workspace = await getWorkspaceById(params)

  console.log(workspace)

  return (
    <div>
      Workspace page
    </div>
  )
}

export default WorkspaceIdPage