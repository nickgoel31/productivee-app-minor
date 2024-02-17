import React from 'react'

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = ({params} : KanbanParams) => {

    const {workspaceId, kanbanId} = params
    

  return (
    <div>KanbanTaskPage</div>
  )
}

export default KanbanTaskPage