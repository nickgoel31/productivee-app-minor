import React from 'react'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div>
        {params.workspaceId}
    </div>
  )
}

export default KanbanPage