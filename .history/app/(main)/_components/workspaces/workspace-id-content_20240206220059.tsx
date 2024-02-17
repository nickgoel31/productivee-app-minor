import { getWorkspaceById } from '@/data/workspaces'
import React from 'react'

const WorkspaceIdContent = async (id:string) => {

    const {} = await getWorkspaceById(id)


  return (
    <div>WorkspaceIdContent</div>
  )
}

export default WorkspaceIdContent