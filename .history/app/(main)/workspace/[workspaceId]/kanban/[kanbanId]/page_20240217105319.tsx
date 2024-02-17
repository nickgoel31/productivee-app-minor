import React from 'react'

type KanbanParams = {
    params: {
        workspaceId: string;
        kanbanId:string;
    }
}

const KanbanTaskPage = ({params} : KanbanParams) => {

    const {workspaceId, kanbanId} = params
    console.log(workspaceId, kanbanId)

  return (
    <div>KanbanTaskPage</div>
  )
}

export default KanbanTaskPage