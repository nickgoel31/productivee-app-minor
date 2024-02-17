

import { getWorkspaceById } from '@/actions/get-workspace';
import { formatDate } from '@/helpers/format-date';
import React from 'react'

interface IParams{
  workspaceId: string;
}


const WorkspaceIdPage = async ({params}:{params: IParams}) => {

  const workspace = await getWorkspaceById(params)

  if(!workspace) return (
    <div>NO WORKSPACE FOUND GO BACK</div>
  );

  const todos = workspace.todos;

  console.log(workspace)

  return (
    <div className='flex py-14 flex-col gap-7 h-full w-full pr-10'>
      <h1 className='font-semibold text-4xl'>{workspace.name}</h1>
      {/* <p>{formatDate(workspace.createdAt)}</p> */}

      <div>

      </div>
    </div>
  )
}

export default WorkspaceIdPage