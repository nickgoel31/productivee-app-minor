import React from 'react'

const KanbanPage = ({params}: {params: {workspaceId:string}}) => {

  const {workspaceId} = params;

  return (
    <div>{workspaceId}</div>
  )
}

export default KanbanPage