import React from 'react'

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = ({params} : KanbanParams) => {
  return (
    <div>KanbanTaskPage</div>
  )
}

export default KanbanTaskPage